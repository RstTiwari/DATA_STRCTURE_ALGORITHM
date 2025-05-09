import java.util.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;;

public class RegexPattern {
    public static void main(String[] args) {
        Pattern newPattern = Pattern.compile("schools",Pattern.CASE_INSENSITIVE);
        Matcher match = newPattern.matcher("this is the my type of Schools");
        Boolean find = match.find();


        Pattern letters = Pattern.compile("^[aA-zZ]|^[1-9]");
        Matcher letterMatched = letters.matcher("00");
        Boolean letFound = letterMatched.matches();
        Boolean letFound1 = letterMatched.find();

        System.out.println(letFound);

    }
}
