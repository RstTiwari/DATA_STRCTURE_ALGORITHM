package Ittrator;

import java.util.*;

public class Ittrator {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("mango");
        fruits.add("guvava");
        fruits.add("apple");

        Iterator<String> it = fruits.iterator();
        it.remove();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
