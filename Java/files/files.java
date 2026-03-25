import java.io.*;

public class files {
    public static void main (String[]  args){
        try{
                    File myfile = new File("practise.txt");
        if(myfile.createNewFile()){
            System.out.println("A New Files Created Succssfully");
        }else{
            System.out.println("A file with Same name alredy exist");
        }

        }catch(IOException e){
            e.printStackTrace();
        }

    }
}