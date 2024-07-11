# Discount

while True:
    age = int(input('Enter your age:'))

    total = int(input("Enter total price:"))
    if age>0 and total>0:
        if age>60:
            print("Successfully discounted")
        elif total>=100:
            print("Successfully discounted")
        elif age>60 and total>=100:
            print("2X discount")
        else:
            print("Discount isn't available")
       
        break
    else:
        print("Enter valid age and total price. ")

    