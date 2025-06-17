package Hash;

import java.util.*;

public class Hash {
    public static void main(String[] args) {
        HashMap<String, String> capitalCities = new HashMap<String, String>();
        capitalCities.put("england", "london");
        capitalCities.put("india", "new delhi");
        capitalCities.put("up", "lucknow");
        capitalCities.put("mh", "mumbai");
        capitalCities.clear();

        for (String i : capitalCities.keySet()) {
            System.out.println(i);
        }
        for (String i : capitalCities.values()) {
            System.out.println(i);
        }

        String find = capitalCities.get("england");
        System.out.println(find);
        HashMap<Integer, String> marks = new HashMap<Integer, String>();
        marks.put(23, "50");
        marks.put(34, "56");
    }

}