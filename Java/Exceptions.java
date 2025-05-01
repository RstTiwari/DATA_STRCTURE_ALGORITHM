
public class Exceptions {
    public static void main(String[] args) {
        try {
            int[] numbers = { 1, 4, 5 };
            Integer Last =  numbers[1];

            Integer age = 17;
            if(age < 18){
                throw new ArithmeticException("Accee Denined you must be of 18");
            }



        } catch (Exception e) {
            System.out.println(e);
            // TODO: handle exception
        }
    }

}
