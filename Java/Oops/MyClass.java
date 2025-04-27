package Oops;

import Oops.Encapsulation.Encapsuation;
import Oops.Inheritance.Inheritance;
import Oops.Polymorphism.Shape;

public class MyClass {

    public static void main(String[] args) {
        Second myObj = new Second();
        Second myObj2 = new Second();

        // Attributes
        // x is here the attribute of the Object myObj for the class Main
        int x = myObj.x;
        int x2 = myObj2.x;
        System.out.println(x);
        System.out.println(x2);

        // Method
        // calling static method
        myMethod();
        // calling public method
        MyClass obj3 = new MyClass();
        obj3.myMethod2();

        // constructor
        // constructor is special methods used to initialize objects , basically the
        // params being passed in the new Method
        // it will have the same name as the name of Class
        Car myCar = new Car("Apache", "the sedan", "2002");
        myCar.speed(200);
        myCar.fullThrottle();
        System.out.println(myCar.carName + "" + myCar.carModel + "" + myCar.carYear);

        // calling for the encapsulation method
        Encapsuation encapusulation = new Encapsuation();
        encapusulation.setName("Rakesh");
        System.out.println(encapusulation.getName());

        // inherintance
        Inheritance newInheritance = new Inheritance();
        newInheritance.honk();

        // Polymorphism

    }

    // Method
    static void myMethod() {
        System.out.println("this is the static method");
    }

    public void myMethod2() {
        System.out.println("this class there public");
    }

    public void fullThrottle() {
        System.out.println("G");
    }

}
