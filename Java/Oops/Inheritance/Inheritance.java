package Oops.Inheritance;


//# Inheritance 
// subclass - the class that inherits form another class 
// superclass - the class which is being inherited from



class child {
    protected String brand = "Maruti Suzuki";
    public   void honk (){
        System.out.println("Pop pop op op po pooo");
    }
}
public class Inheritance extends child {
        public static void main(String[] args){
           System.out.println("inherotacne");
        } 
}
