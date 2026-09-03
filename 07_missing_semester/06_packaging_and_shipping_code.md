# Lecture 6: Packaging & Shipping Code

## Definition

- This refers to the idea that while you might get code to work on your own development machine it might not be the case that the same code will run on a different computer.
- You might not be thinking about all the dependecies at play and if those will be available on the next machine.

## Dependencies

- For example, if you run this file:

```Python
import requests

response = requests.get("https://missing.csail.mit.edu")
print(f"Status: {response.status_code}")
```

- It will throw a `ModuleNotFoundError: No module named 'requests'`
- This module is not part of the built-in Python modules, it was written by someone else, so in order to use it, it must be downloaded first and available on the current machine.
- In Python the tool to do this is `pip + package_name`
- The Python package manager `pip` will also download all the dependencies of the package you're trying to install.
- We can check where a package is in our environment with `pip list | grep package_name`

### Dependency Conflicts

- As we start adding more and more packages we might run into dependency conflicts.
- The issue manifests itself when you try to install specific versions of packages that have other dependencies (and their versions are not compatible).
- The solution to this is creating an environment, in Python you can do this with `python -m venv myvenv`, by executing this command Python creates a replica of the language runtime that is completely isolated, and if we activate the runtime with `source myvenv/bin/activate` and we can check that it's active by running `which python`, what this allows you to do is install specific versions of packages that run only in this environment. And you can check where a package is installed by running `python -c 'import package_name; print(package_name.__path__)'`.
- A much user friendlier version of `pip` is `uv`, and its most remarkable feature is that is much faster than `pip` in many instances, and also in dependency resolution.
- To install a package with `uv` we run `uv pip install package_name`, and one thing you might notice is how fast the installation happened in comparison with just running `pip`.
- Another important aspect to this is runtime version isolation, for example if you're running a project with a specific version of Python and want to keep using that version in the environment.

## Artifacts & Packaging

- Now the question we address is, what if you have a package and want to make that available to other people.

### Building a package

- Let's say we have the following Python file:

```Python
import typer

def greet(name: str) -> str:
    print(f"Hello, {name}!")

def cli():
    typer.run(greet)

if __name__ = "__main__":
    cli()
```

- The way to share a Python package has to configured in TOML with Python's specific schema:

```TOML
[project]
name = "greeting"
version = "0.1.0"
description = "A simple greeting library"
dependencies = ["typer>=0.9"]

[build-system]
requires = ["setuptools>=61.0"]
build-backend = "setuptools.build_meta"

[project.scripts]
greet = "greeting:cli"
```

- Now we can try to build and resolve this for testing with `uv pip install .`

### Releases & Versioning

- As you start building your libraries you start adding more and more dependencies, so one challenge is specifying dependencies that will run with your code.
- The way we do this in software packaging is by specifying different version ranges of what works and what doesn't.
- In Python this will it in a file `ranges.toml`:

```TOML
[project]
dependencies = [
    "requests==2.32.3",     # Exact version - only this specific version
    "click>=8.0",           # Minimum version - 8.0 or newer
    "numpy>=1.24,<2.0",     # Range - at least 1.24 but less than 2.0
    "pandas~=2.1.0,         # Compatible release - >=2.1.0 and <2.2.0
]
```

- When you want to check the tree of dependencies you created by installing just one package, you can run `uv tree` in the current project directory.
- Software developers created a convention that highlights what changes from one version to another. The most popular convention is called Semantic Versioning, found at `semver.org`.
- The classifications are:
  - MAJOR -> a major change that might break existing functionality
  - MINOR -> added features that maintain backward compatibility
  - PATCH -> bug fixes and documentation changes
  - So when you see that a package went from 15.2.3 to 16.0.0 that marks a MAJOR change.
- `uv sync` will guarantee that the project uses the same versions that were called when testing the application.

### Nix

- A complex package manager that not only handles Python packages but all the packages that you install and provide a reproducible way of pretty much doing anything in your operating system.

## VMs & Containers

- Shipping an entire computer as a Virtual Machine, this becomes very important when a specific package depends on external runtimes (such as the CUDA library).
- The disadvantage of this is that you introduce a lot of overhead, you're running an entire operating system in order to just get an application running on top of your default operating system.
- To tradeoff some of that complexity of running an entire operating system VM developers created containerization (this process works differently on non-Linux operating systems, by spinning a VM and then running the containers inside it).
- Docker is one very popular tool in this space and it provides great compatibility with Kubernetes.

### In Practice

- You will install Docker and that spawns a process that allows you to re-use the parts of operating system for other containers.
- In a container, whatever processes you spawn that's what is actually running, there are no operating system processes you generally get by default when running an OS locally.

### Creating Your Own Docker Image

- To create your own Docker image, you configure a Dockerfile:

```Dockerfile
FROM python:3.14
RUN pip install uv
RUN apt-get update
RUN apt-get install -y gcc
COPY greeting/ /app
WORKDIR /app
RUN uv pip install --system /app
```

- In order to produce a valid image, we point this command at the folder that contains the Dockerfile:

```bash
docker build -t image_name docker/simple
```

- And to run it, you execute the command `docker run image_name:latest greet "from inside Docker"`
- Assuming there is a greet package inside the image, this command will execute it.

- In reality, your Dockerfile should be better optimised to help reduce the image size and make it easier to download:

```Dockerfile
FROM python:3.14-slim
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/ub
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc & \
    rm -rf /var/lib/apt/lists/*
COPY package_name /app
WORKDIR /app
RUN uv pip install /app --system --no-cache
```

- By doing this you might cut in half the size of what the container image will end up being.
- To list all available images you can run `docker image ls`, and if you compare the first with the optimised verison, you should see a noticeable difference in size.
- With time it should become obvious what dependencies you need to include in your Dockerfile.

## Services & Orchestration

- Running containers is good but at some point you will start to find another layer of abstraction, and that layer means that instead of relying on dependencies that are regular packages you might start depending on entire services, and those services have their own separate container, as an example this could be an entire PostgreSQL database and now you have to decide, you have the option to install Postgre within your Dockerfile and hope that the dependencies that Postgre has and the dependencies that your program has don't conflict with eachother, or you have to just separate them into different containers and make them communicate with eachother, and because of dependency hell, the second part of this decision is used more often.
- Deploying and connecting services to one another via `docker-compose`:

```YAML
# docker-compose.yml - Multi-container application example
services:
    web:
        build:
            context: .
        ports:
            - "1337:1337"
        environment:
            - ETCD_URL=http://etcd:2379
        # don't start the web server until this database is running
        depends_on:
            - etcd

etcd:
    image: quay.io/coreos/etcd:v3.5.9
    command:
        - etch
        - --listen-client-urls=http://0.0.0.0:2379
        - --advertise-client-urls=http://etcd:2379
    volumes:
        - etcd_data:/etcd-data

volumes:
    etch_data:
```

- Docker compose is an extension of Docker that takes in a YAML configuration file and translates it into a series of Docker commands to deploy the containers that you need to run.
- In this case we are deploying two services, a web server and a database. Also, this configuration file specifies as the dependency the database service, only after that is up and running the rest of the application will run.
- `docker compose up` will spawn both containers and give you the url at which it's running.
- So now we can deploy these multi-service applications, but we still have a problem, who will start this whenever the machine gets restarted?
- So another pattern that now appears is 'service (container) orchestration', on Linux the most popular tool is `systemd` and it has a way of defining services, so we can restart a new one by creating a file under `/etc/systemd/system/myapp.service`. `systemd` also has its own syntax for defining things, and this is a great use case for LLMs in learning what are the options.

```systemd conf file
[Unit]
Description=My Application
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/yourname/demo/webapp
ExecStart=/usr/bin/docker compose up -d
ExecStop=/usr/bin/docker compose down

[Install]
WantedBy=multi-user.target
```

- Then we can start the application by using the command `sudo systemctl start myapp`
- Nothing will be printed after running the command so to check status we run `sudo systemctl status myapp`
- The benefit of this is that the same process as doing `docker compose up` will be done but now it's the operating system that is managing this and if we were to restart the machine, this will start automatically.
- And if we want to stop it we run `sudo systemctl stop myapp`

## Publishing

- Giving other people access to the services you create.
- A lot of packages will put their code on GitHub and give you instructions on how to install it.
- `uv publish --publish-url https://test.pypi.org/legacy/` will upload your package for other people to use.
- The `https://test.pypi.org/legacy/` is an URL dedicated to testing that you know how to publish packages.
- To test if it can be downloaded we run `uv pip install --index-url https://test.pypi.org/simple/ package-name`
- Docker follows a similar process, the important thing is to include your username for permission checks `docker build -t your-username/image-name docker/optimized`, once that is done we can push the image with `docker push your-username/image-name:latest`, and then you'll be able to see your image posted on DockerHub.
