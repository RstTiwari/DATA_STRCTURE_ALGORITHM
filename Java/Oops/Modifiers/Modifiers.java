package Oops.Modifiers;

// Modifiers
//A Keyword that it is used to set the access level for classes, attributes, methods and constructors.

//### - ACCESS Modifiers

//# ACCESS MODIFIERS FOR CLASS 
// public keyword  modifiers
public class Modifiers {

}

// Default key modifiers
class MyDefaultModifiers {
}

// #ACCESS MODIFIERS FOR ATTRIBUTES
class AttributesModifiers {
    public String name = "rohit";
    private String salary = "23456577";
    protected String department = "HR";
}

// ## Non Access Modifiers

// final Keywords
final class Vehicle {
    protected String name = "rohit";

    public void honk() {
        System.out.println("This is the first");
    }

}

// abstract Method
abstract class New {
    public abstract void study();
}
