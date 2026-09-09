# Main - conventionally defined at the top to allow calling functions defined below

def main():
    # Print to console
    hello()

# Inputs & Params/Args


name = input("What's your name? ").strip().title()

# Clean up inputs
# Bug: Does not remove \n and the like.

normalised_name = " ".join(name.split())

# Functions (first define then use)


def hello():
    print(f"Hello, {normalised_name}!")


# Main - must be called at the end

main()
