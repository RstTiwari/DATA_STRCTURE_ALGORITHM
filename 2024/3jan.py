#Python - Variable Names

myVar = "Rohit"
myvar ="rohit"
my_var = "rohit"
My_Var ="rohit"

#Python Variables - Assign Multiple Values
x,y,z = "orange","mango","apple" 

x = y= z = "orange"

print(z)


#Destructring in python
fruits =  ["apple", "banana", "cherry"]
x, y,z = fruits
print(z)

#Global Variables
name ="Rohit"
def myFunc():
    name = "Durgesh"
    print(name)

myFunc()
print(name)

#Global Keyword 

def newFun():
    global std
    std = 9

newFun()

print(std)


#Python Data Types
str , int ,float,list, tuple, dict, bool
name = str("rohitr")
food = list(("puri","sevai","paneer"))
print(food)
sport = tuple(("cricket","basket bal"))
print(sport)

#Python Numbers

x = 1
y = 2.56
z = 1j

print(type(z))
float(x)
print(float(x))
baja  = 