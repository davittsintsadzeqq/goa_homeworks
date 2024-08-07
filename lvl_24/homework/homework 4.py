while True:
    age = int(input("Enter your age: "))
    experience = int(input("How many years of driving experience do you have?: "))
    if age > 0 and experience > 0:
        if age < 18:
            print("You aren't old enough to have a driving license")
        elif age >= 18 and experience >= 1:
            print("You can have a driving license")
        elif age >=18 and experience < 1:
            print("You don't have enough experience to have a driving license ")
        break
    else:
        print("Please enter valid number ")