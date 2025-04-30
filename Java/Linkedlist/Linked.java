package Linkedlist;

import java.util.LinkedList;

public class Linked {
    public static void main(String[] args) {
        LinkedList<String> cars = new LinkedList<String>();
        cars.addFirst("Rohit");
        cars.addFirst("Ram");
        cars.addLast("name");
        String first = cars.getFirst();
        String last = cars.getLast();
        System.out.println(first + " " + last);
        for (String i : cars) {
            System.out.println(i);
        }
    }
}
