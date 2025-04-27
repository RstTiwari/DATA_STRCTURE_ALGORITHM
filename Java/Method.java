public class Method {
    static void myMethod(String name) {
        System.out.println("this method is being called " + name);
    }

    public static void main(String[] args) {
        myMethod("rohit");
        myMethod("liame");
        myMethod("rihit");
        int num = myMethod2(10);
        System.out.println(num);

        int sum1 = plusMethod(3, 5);
        double sum2 = plusMethod(3.55, 7.2);
        System.out.println(sum1 + sum2);
        int total = sum(10);
        System.out.println(total);
        int multiple = factorial(5);
        System.err.println(multiple);
    }

    static int myMethod2(int param) {
        return param;
    }

    // method overloading means writing the same name for different data types;
    static int plusMethod(int x, int y) {
        return x + y;
    }

    static double plusMethod(double x, double y) {
        return x + y;
    }

    // recursion
    static int sum(int num) {
        if (num <= 0) {
            return 0;
        }
        return num + sum(num - 1);
    }

    static int factorial (int num){
        if(num <=1){
            return 1;
        }
        return num * factorial(num-1);
    }

}
