package Oops;

// understating the methods of Oops
public class Car {
    String carName;
    String carModel;
    String carYear;

    public static void main(String[] args) {

        Car myCar = new Car("Sedan", "classing", "2021");
        myCar.fullThrottle();
        myCar.speed(100);

    }

    public Car(String name, String model, String year) {
        carName = name;
        carModel = model;
        carYear = year;
    }

    public void fullThrottle() {
        System.out.println("Giving the Full throttle ");
    }

    public void speed(int speed) {
        System.out.println("Max speed is :" + speed);
    }

}
