public class Main {
    public static void main (String[] args){
        // this is the comment
        System.out.println("hello world");
        /**
         * This is the multiline comment
         */
        int number = 10;
        String name  = "textbook";
        float myFloatNum = 5.94f;
        char myChar = 'D';
        boolean right = true;
        String myText = "hello";
        System.out.println(number );

        //Identifiers  basically variables with unique name
        int m = 60;
        int minutesPerHour = 60;

        // Student Data 
        String studentName = "Rohit Tiwari";
        int  studentId  = 15;
        int  studentAge = 20;
        float studentFees = 453.45f;
        char studentGrade = 'B';
        System.out.println("Student: " + studentName);
        System.out.println("Student id: " + studentId);
        System.out.println("Student Age: " + studentAge);
        System.out.println("Student Fees:" + studentFees);
        System.out.println("Student Grade :" + studentGrade);

        // short is 2 bytes and 16 Bits        short x = 32767;
        System.out.println(Short.BYTES);
        System.out.println(Short.SIZE);

        //int is 4 bytes and 32 bits
        int num = 2147483647;
        System.out.println(Integer.BYTES);
        System.out.println(Integer.SIZE);

        //long  is 8 bytes and 64 Bits
        long myNum = 9223372036854775807L;
        System.out.println(Long.SIZE);
        System.out.println(Long.BYTES);


        //float is 4 bytes and 32 bits
        float myAmount =  134455.3447344f;
        System.out.println(Float.BYTES);
        System.out.println(Float.SIZE);

        
        // Double will 8 bytes and  64 Bits
        double gdpAmount = 2377474.7474774773477474d;
        System.out.println(Double.BYTES);
        System.out.println(Double.SIZE);
    }
}






