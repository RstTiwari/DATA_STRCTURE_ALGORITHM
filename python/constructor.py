class Car:
    def __init__(self ,started = False ,speed = 0):
        self.started = started
        self.speed = speed
    
    def start(self):
        self.start = True
        print("Vohhh the Car Has Started")
    
    def increase_speed(self,val):
        if self.started:
            self.speed  = self.speed + val
            print("You are speeding enjoy the Car")
        else:
            print("First Start Your Car")
    

car = Car(True,10)
car.increase_speed(20)