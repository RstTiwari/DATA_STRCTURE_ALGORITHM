public class typeCasting {
    public  static void main(String[] args){

        //narrow casting 
        double marks =  9.344;
        int passing = (int) marks;
        System.out.println(passing);


        // automatic casting
        int amount = 9000;
        double  amounts = amount;
        System.out.println(amounts);


        // let's calculate the percnetage
        int maxScore = 500;
        int userScore = 450;

        double percnetage =  (double)userScore / maxScore ;
        System.out.println(percnetage);

    }
}