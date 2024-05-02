#In python everthing is  Object even function are Object

# len(5)   ## Error as int as no len()
print(dir(5))  # detials of method of int object


# what are the python methods
print(dir("test"))

print("text".__len__()) # its oneof the way

print(len("text"))  #shorthand way to use

print("test".islower())
print("test".replace("e","c"))
print("test".split("t")[1])
print("text".capitalize())

##Class
## Classes are the bluePrint to create the object and hold the value
print(type("a"))
print(type(5))
print(type(True))

##Creating my own classes 

class Car:
    speed = 0
    started = False
    def start(self):
        self.started = True
        print("Car started")
    
    def increase_speed(self,delta):
        if self.started:
            self.speed = self.speed + delta
            print("Voooohh")
        else:
            print("You need to start the Car First")
    def stop():
        self.speed = 0
        print("The car has stopped") 

car = Car()
car.start()
car.increase_speed(10)
print(car)

car1 = Car()
car2  = Car()
print(id(car1))
print(id(car2))

## Adding Constructor to Python Function
