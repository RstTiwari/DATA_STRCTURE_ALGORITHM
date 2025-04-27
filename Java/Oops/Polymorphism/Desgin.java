package Oops.Polymorphism;

// package-private (default) — not accessible outside the package
class Shape {
    void draw() {
        System.out.println("Draw the Design");
    }
}

// also package-private
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

// only this class is public — matches the file name Desgin.java
public class Desgin {
    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Square();
        shape1.draw();
        shape2.draw();
    }
}
