
package arraylistdemo;

import java.util.*;
import java.io.*;

public class Array {
    public static void main(String[] args){
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("AOrange");
        fruits.add("Pineapple");
        fruits.add("Guava");
        fruits.add("Chikoo");
        try{
         String val = fruits.get(1);
         fruits.set(3,"banana");
         fruits.add("Mango");
         System.out.println(fruits);
        }
         catch(IndexOutOfBoundsException  e){
            System.out.println(e);
        }

        for(String fruit:fruits){
            System.out.println(fruit);
        }

        boolean contains = fruits.contains("Apple");
        System.out.println(contains);
        System.out.println(fruits.size());

        //Now Lets Understand the LinkedList of Java in Details 
        LinkedList<String> colours = new LinkedList<String>();
        colours.add("Red");
        colours.add("blue");
        colours.add("black");
        colours.add("white");

        colours.addFirst("Pink");
        colours.addLast("yellow");
        String check = colours.peek();
        System.out.println(check + "the peek check");
        System.out.println(colours.peekLast());
        System.out.println(colours.getFirst());
        System.out.println(colours.getLast());
        Collections.sort(fruits);
        System.out.println(fruits);
        Collections.sort(fruits,Collections.reverseOrder());
        System.out.println(fruits);
        System.out.println((int)'A');
        System.out.println((int)'a');
        System.out.println((char)67);
        System.out.println(Integer.toString(67));



     
    }
}