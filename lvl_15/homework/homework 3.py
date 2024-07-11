# BMI

weight = float(input("Enter your weight: "))

height = float(input("Enter your height: "))

BMI = weight / height**2

print(BMI)

if BMI<18.5:
    print("Underweight")
elif BMI>18.5 and BMI<24.9:
    print("Normalweight")
elif BMI>25 and BMI<29.9:
    print("Overweight")
else:
    print("More than overweight")