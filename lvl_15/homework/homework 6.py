# Scholarship

while True:
    GPA = float(input("Enter your GPA: "))
    income = int(input("Enter your family's income: "))
    if income>0:
        if GPA>=3.5:
            print("Scholarship available")
        elif GPA>=3 and income<50000:
            print("Highest scholarship available")
        else:
            print("Scholarship not available")

        break
    else:
        print("Enter valid income. ")   