import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.*;
public class Date {
    public static void main(String[] args) {
        LocalDate myDate = LocalDate.now();
        System.out.println(myDate);

        LocalTime myTime = LocalTime.now();
        System.out.println(myTime);

        LocalDateTime myDateTime = LocalDateTime.now();
        System.out.println(myDateTime);

        String myforatedDate = myDateTime.format(DateTimeFormatter.ofPattern("DD-MM-YY HH:MM:SS"));
        System.out.println(myforatedDate);

    }

}
