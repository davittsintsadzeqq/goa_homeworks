def simple_calculator(num1,num2,do):
    if do == "-":
        anws = num1 - num2
        print (anws)
    elif do == "+":
        anws = num1 + num2
        print (anws)
    elif do == "*":
        anws = num1 * num2
        print (anws)
    elif do == "/":
        anws = num1 / num2
        print (anws)
    else:
        print ("wrong input try again")

num1 = float(input("enter first number: "))
num2 = float(input("enter second number: "))
do = input("enter your choice of calculations tu racgaca arvici: ")
print(simple_calculator(num1,num2,do))