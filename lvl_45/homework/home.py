# 1. სიტყვაში ასობგერების რაოდენობა
# შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და გამოითვლის, რამდენი ასობგერაა  ამ ტექსტში.


def how_many(text1):
    aeiou = 'ა ე ი ო უ'
    count = 0
    
    for i in text1:
        if i in aeiou:
            count += 1
            
    return count

input_text = str(input("შეიყვანეთ რამე:"))
vowel_count = how_many(input_text)
print(f"ასობგერების რაოდენობა: {vowel_count}")


# 2. პირობითი ოპერაცია რიცხვის დადებითობის შემოწმებისთვის
# შექმენი პროგრამა, რომელიც იფუნქციონირებს შემდეგნაირად:
#  მომხმარებლის შეყვანილი რიცხვი იქნება დადებითი, უარყოფითი, ან ნულოვანი, და შესაბამისი შეტყობინება უნდა გამოიტანოს.


number = float(input("Enter number: "))

if number > 0:
    print("Number is positive")
elif number < 0:
    print("Number is negative")
else:
    print("Number is zero")

# 3. მომხმარებლის ასაკის კატეგორიზაცია

# შექმენი პროგრამა, რომელიც მიიღებს მომხმარებლის ასაკს და დააბრუნებს შეტყობინებას იმის მიხედვით,
# თუ რომელ ასაკობრივ კატეგორიაშია მომხმარებელი.


def  what_age_are_you(age):
    if age < 0:
        return "Age cannot be negative!"
    elif age <= 12:
        return "You are child"
    elif age <= 19:
        return "You are teenager"
    elif age <= 59:
        return "You are adult."
    else:
        return "You are elderly"

age = int(input("Enter your age: "))
print(what_age_are_you(age))

# 4. ლუწი და კენტ რიცხვთა სიის პოვნა
#შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას
# და დააბრუნებს ორ ცალკე სიას – ერთში იქნებიან ლუწი რიცხვები, ხოლო მეორეში კენტი რიცხვები.

# ?



# საშუალო რიცხვის პოვნა ფუნქციით
# შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას და დააბრუნებს სიის საშუალო რიცხვს.
# ?