from math import pi

class  ShapeWithoutOPR:
    def __init__(self,shape_type,**kwargs):
        self.shape = shape_type
        if self.shape =="rectanle":
            self.width =kwargs['width']
            self.height = kwargs['height']
        elif self.shape =="circular":
            self.raidus = kwargs['radius']
        else:
            raise TypeError("Invalid Shape Type")
    

    def calculate_area(self):
        if self.shape =="rectanle":
            return self.width*self.height
        elif self.shape =="circle":
            return 2*pi*self.raidus
        else:
            return TypeError("Invalid Shape Type")
        




from abc import  ABC ,abstractmethod


class Shape(ABC):
    def __init__(self,shape_type):
        self.shape = shape_type
    
    @abstractmethod
    def calculate_area(self):
        pass


class Rectanle(Shape):
    def __init__(self,width,height):
        super().__init__("rectangle")
        self.height = height
        self.width = width

    def calculate_area(self):
        return self.height*self.width
    
class Circle(ABC):
    def __init__(self,radius):
        super().__init__("circle")
        self.radius = radius
    
    def calculate_area(self):
        return 2*pi**self.radius
    




        

        