# Main
def main():
    count = 1

    for i in range(3):
        while count < 5:
            print_row(count)
            count += 1

# Func definitions


def print_row(width):
    print("#" * width)


# Call main
main()
