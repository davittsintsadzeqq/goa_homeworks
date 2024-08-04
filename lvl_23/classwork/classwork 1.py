num = int(input("Enter number from 1 to 100: "))

while True:
    my_guess = int(input("My guess: " ))
    if num == my_guess:
        print("Correct")
        break
    else:
        print("try again")