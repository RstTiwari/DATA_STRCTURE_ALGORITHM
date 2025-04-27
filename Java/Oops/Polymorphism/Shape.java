package Oops.Polymorphism;

// Polymorphism -Many Form - when one thing acts differently based on the situation
public class Shape {
    void draw() {
        System.out.println("Draw the shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

class Square extends Shape {
    void draw() {
        System.out.println("Drawing the square");
    }

}