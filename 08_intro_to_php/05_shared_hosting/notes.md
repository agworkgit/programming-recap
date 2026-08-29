# Getting Up and Running

## Learning PHP on Shared Hosting — Project Documentation

---

## Overview

This repository documents the process of deploying a **PHP website** to a shared hosting server.

The goal was to upload an `index.php` file, configure the domain and hosting environment, verify that PHP was working correctly, and make the website accessible through the domain.

---

## Final Outcome

| Item                 | Details                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| **Hosting Provider** | DreamHost — Shared Hosting                                                 |
| **Status**           | Live                                                                       |
| **File Deployed**    | `index.php`                                                                |
| **Domain**           | `ag-cloud.tech` _(example only — real domain details omitted for privacy)_ |

---

# Steps Taken

## 1. Register the Domain and Configure DNS

The domain was registered through **DreamHost / Namify (Orderbox-DNS)**.

The nameservers were updated to point to DreamHost:

```text
ns1.dreamhost.com
ns2.dreamhost.com
ns3.dreamhost.com
```

The nameservers were configured through the **Namify / Orderbox-DNS control panel**, rather than through DreamHost.

After making the changes, DNS propagation was allowed to complete. This can take up to approximately 48 hours, although it may happen considerably faster.

DNS propagation was checked using services such as [DNS Checker](https://dnschecker.org/).

---

## 2. Set Up the DreamHost Hosting Account

A new hosting account was created through DreamHost.

The following configuration was used:

1. Created a DreamHost hosting account.
2. Selected a **Shared Hosting** plan.
3. Added the registered domain to the hosting account.
4. Ensured that the domain's DNS configuration pointed to DreamHost.

If the domain is registered with another provider, the domain must be configured to point to the hosting provider's nameservers or DNS records.

---

## 3. Upload the Website Files

The website files were uploaded to the server using an FTP client such as **FileZilla**.

The uploaded files included:

```text
index.php
css/
js/
images/
```

The typical document root for a DreamHost website is similar to:

```text
/home/username/public_html/
```

Subdomains may use a different directory depending on how the hosting account is configured.

### Example

```text
/home/username/public_html/

├── index.php
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    └── logo.png
```

Replace `username` with the actual server username.

---

## 4. Verify That PHP Is Installed

Before testing the main website, PHP was verified using a temporary `phpinfo.php` file.

The file contained:

```php
<?php
phpinfo();
?>
```

The file was uploaded to the server and accessed through:

```text
https://yourdomain.tech/phpinfo.php
```

The resulting page confirmed that:

- PHP was installed and running.
- The PHP version was available.
- The web server was correctly processing PHP files.
- The hosting environment was functioning as expected.

> **Security note:** `phpinfo.php` should not be left publicly accessible on a production website because it exposes detailed information about the server environment.

---

## 5. Test the Live Website

Once PHP was confirmed to be working:

1. The temporary `phpinfo.php` file was deleted or renamed.
2. The `index.php` file was uploaded to the document root.
3. The domain was opened in a web browser.

The website was successfully loaded through:

```text
https://yourdomain.tech/
```

PHP content was correctly processed and rendered by the server.

---

# Tools Used

| Tool                 | Purpose                                       |
| -------------------- | --------------------------------------------- |
| **DreamHost Panel**  | Hosting account, domain and server management |
| **FileZilla**        | Uploading website files to the server via FTP |
| **DNS Checker**      | Checking DNS propagation                      |
| **Chrome / Firefox** | Testing and verifying the live website        |

---

# Troubleshooting

## `index.php` Does Not Load

If the website does not load correctly:

1. Verify that `index.php` was uploaded to the correct document root.
2. Confirm that the filename is exactly `index.php`.
3. Check file and directory permissions.
4. Review the DreamHost error logs.
5. Confirm that the domain is pointing to the correct hosting account.
6. Verify that PHP is enabled for the domain.

Typical permissions are:

```text
Directories: 755
Files:       644
```

---

## DNS Is Not Working

If the domain does not resolve correctly:

1. Confirm that the correct nameservers are configured.
2. Verify the nameservers using a DNS lookup service.
3. Check whether DNS propagation has completed.
4. Confirm that the domain is associated with the correct DreamHost hosting account.

The expected nameservers are:

```text
ns1.dreamhost.com
ns2.dreamhost.com
ns3.dreamhost.com
```

---

# Basic Security Considerations

When deploying a PHP application to shared hosting:

- Do not expose `.env` files or configuration files containing credentials.
- Do not leave `phpinfo.php` accessible on a production website.
- Use appropriate file and directory permissions.
- Avoid making files world-writable unless there is a specific requirement.
- Keep PHP and application dependencies up to date.
- Do not store passwords, API keys or other secrets directly in publicly accessible files.

---

# Key Takeaways

|  Step | Action                                                                     |
| ----: | -------------------------------------------------------------------------- |
| **1** | Registered the domain and configured its nameservers to point to DreamHost |
| **2** | Created a shared hosting account                                           |
| **3** | Uploaded the website files using FTP                                       |
| **4** | Verified that PHP was installed and functioning                            |
| **5** | Tested and confirmed that the website was accessible through the domain    |

---

# Next Steps

Potential next steps for the project include:

- Add additional pages and functionality.
- Connect the application to a MySQL database through DreamHost.
- Explore DreamHost's hosting and deployment tools.
- Configure a custom domain email address.
- Improve the website's security and deployment workflow.
- Learn how PHP interacts with databases and server-side applications.

---

# Additional Resources

- [DreamHost PHP Hosting Guide](https://help.dreamhost.com/)
- [FileZilla Documentation](https://wiki.filezilla-project.org/Documentation)
- [DNS Checker](https://dnschecker.org/)

---

# Final Status

| Item                                  | Status   |
| ------------------------------------- | -------- |
| Domain registered                     | Complete |
| Nameservers pointing to DreamHost     | Complete |
| Hosting account configured            | Complete |
| `index.php` uploaded                  | Complete |
| PHP verified                          | Complete |
| Website accessible through the domain | Complete |

## Result

The PHP website was successfully deployed to DreamHost shared hosting and made accessible through the configured domain.
