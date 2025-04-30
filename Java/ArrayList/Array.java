package ArrayList;
import java.util.Collection;
import java.util.ArrayList;

public class Array {
    public static void main(String [] args){
        ArrayList<String>  fruits =  new ArrayList<String>();
        fruits.add("apple");
        fruits.add("mango");
        fruits.add("guvava");
        fruits.add("orange");
        fruits.add("watermelon");
        Boolean cont = fruits.contains("apple");
        for(String i:fruits){
            System.out.println(i);
        }
        fruits.get(3);
        System.out.println(cont);

    }
}
