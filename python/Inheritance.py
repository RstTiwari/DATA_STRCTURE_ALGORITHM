

print(dir(object))

class Vehicle:
    def __init__(self ,started = False , speed = 10):
        self.started = started
        self.speed = speed
    
    def start(self):
        self.started = True
        print("Car Started")

    def increase_speed(self,val):
        if self.started:
            self.speed = self.speed + val
            print("You have incresed the Speed by" + val)
    def stop(self):
        self.started = False 
        print("Stopped...")
    


#Just Inherited Values from all the its Parent Class
class Car(Vehicle):
    trunk_open = False
    def open_trunk(self):
        self.trunk_open = True
    
    def close_trunk(self):
        self.trunk_open = False



class Motorcyle(Vehicle):
    def __init__(self, center_stand_out = False , tankEmpty = False):
        self.center_stand_out = center_stand_out
        self.tankEmpty = tankEmpty
        super().__init__()
    
    def check_center_stand(self):
        if center_stand_out:
            print("Please Fold Stand")
        else:
            print("--")
    def isTankEmpty(self):
        if self.tankEmpty:
            print("Please get tank Fuled")
        else:
            print("go on ride tank full")
    def increase_speed(self,val):
        if self.tankEmpty:
            print("You are running on the Low Fuel please get Fuled")
        else:
            self.speed = self.speed + val
            print("Voooh Speeding up enjoy the ride", val)

vehicle = Vehicle(started = True ,speed = 20)
motorcyle = Motorcyle(center_stand_out = True , tankEmpty = False)
print(motorcyle.isTankEmpty())