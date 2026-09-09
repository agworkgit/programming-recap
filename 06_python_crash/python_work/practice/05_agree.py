answer = input("Do you agree? (Yes / No): ").strip().lower()

# if user's answer is not yes, or no, prompt again


while answer != "yes" or answer != "no":
    if answer == "yes":
        print("Agreed")
        break
    elif answer == "no":
        print("Not agreed")
        break
    else:
        print("Invalid answer, try again.")
        answer = input("Do you agree? (Yes / No): ")

# 'break' tells the loop to stop once the answer matches what's needed
