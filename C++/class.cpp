#include <iostream>
using namespace std;


class Myclass {
    // access specifier
    public:
    int age;
    string name;
    // now lets understant the consturctor in c++
    Myclass (int age ,string name){
        age = age;
        name = name;
    };
    void display (){
        cout << "i am display class and method";
    }
    int speed(int maxSpeed);

    string speed(int maxSpeed, string msg){
        cout << msg;
        return msg;
    }

};


int Myclass :: speed(int maxSpeed){
    return maxSpeed;
}


int main(){
    Myclass  myclass(24,"Rohit") ;
    cout << myclass.age << "this to check" <<"\n";
    myclass.display();
    myclass.speed(200);
    myclass.speed(200,"the speed is 200km/hr");
    return 0;
}