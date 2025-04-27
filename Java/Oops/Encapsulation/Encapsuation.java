package Oops.Encapsulation;

// ## - Encapsulation -- hiding the sensitive data from the users 

// declare class variables/attributes as private
// provide public get and set methods to access and update the value of a private variable

public class Encapsuation {
    private String name = "Rohit";

    // public class to get the name as name is the private attribute
    public String getName() {
        return name;
    }

    // Setter method
    public void setName(String newName) {
        this.name = newName;
    }
}
