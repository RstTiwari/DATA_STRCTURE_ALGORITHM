package setDemo;
import java.util.*;


public class Set {
    public static void main (String[] args){
        HashSet<String> cars = new HashSet<String>();
        cars.add("Volvo");
        cars.add("Volkswagen");
        cars.add("Audi");
        cars.add("Benz");
        cars.add("Benz");
        System.out.println(cars.contains("Benz"));
        System.out.println(cars.contains("eight"));
        cars.remove("Volvo");
        System.out.println(cars);
        cars.clear();
        System.out.println(cars);


        //now learning TreeSet which stores data in order way 
        TreeSet<String> bike = new TreeSet<String>();
        bike.add("BMW");
        bike.add("KTM");
        bike.add("HONDA");
        bike.add("Suzuki");
        System.out.println(bike);

        for (String a :bike){
           System.out.println(a);
        }


        


    }
}