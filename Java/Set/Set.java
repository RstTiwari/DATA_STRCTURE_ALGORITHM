package Set;

import java.util.*;;

public class Set {
    public static void main(String[] args) {
        HashSet<Integer> marks = new HashSet<Integer>();
        marks.add(30);
        marks.add(40);
        marks.add(30);
        marks.add(60);

        Boolean inSet = marks.contains(40);
        System.out.println(inSet);

        for (Integer i : marks) {
            System.out.println(i);
        }

    }
}
