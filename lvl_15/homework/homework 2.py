# Calculating the total price of items that user wants to buy

while True:
    total_price = 0
    num_items = int(input("Enter the number of items you want to purchase: "))
    if num_items > 0:
        for i in range(num_items):
            while True:
                price = int(input(f"Enter prices for item {i + 1}: " ))
                if price > 0:
                    total_price = total_price + price
                    break
                else:
                    print("Please enter a valid price for item (greater than 0).")
        print(f"Total price for every item is:{total_price}$" ) 
        break
    else:
        print("Please enter a valid number of items (greater than 0).")