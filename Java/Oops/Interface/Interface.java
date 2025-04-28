package Oops.Interface;



interface Payment {
    public void makePayment(); // void interface method 
}

class CreditCardPayment implements Payment {
    public void makePayment(){
        System.out.println("make a payment method for this process");
    }
}
class UpiPayment implements Payment {
    public void makePayment(){
        System.out.println("make a payment");
    }
}

public class Interface {
    public static void main (String[] args){
        Payment p ;
        String method = "upi";
        if (method == "upi"){
            p = new UpiPayment();
        }else if (method == "credit"){
            p = new CreditCardPayment();
        }else {
            p = new UpiPayment(); // Default
        }

        p.makePayment();
    }
}
