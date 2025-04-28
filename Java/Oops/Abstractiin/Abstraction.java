package Oops.Abstractiin;


// Abstraction - A process  of hidding certain details and essential data


abstract class Animal {
    public abstract void animalsound();

    public void sleep(){
        System.out.println("Szzzzz");
    }

    
}


class Pig extends Animal{
    public  void animalsound(){
        System.out.println("this is pig animal");
    }
}

public class Abstraction {
    public static void main(String[] args){
        Pig  myPig = new Pig();
        myPig.animalsound();
        myPig.sleep();

    }
}
