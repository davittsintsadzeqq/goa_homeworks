def password1():
    while True:
        pas = "nata123"
        password = input("Enter Your Password or  write exit: ")
        if password == "exit":
            print("exit...")
        elif password == pas:
            print("You're logged in")
            break
        else:
            print("Incorrect, Try Again")
password1()