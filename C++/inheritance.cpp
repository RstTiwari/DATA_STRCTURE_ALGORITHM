#include <iostream>
class Base {
    public:
    void show(){
        std::cout << "Base clas show method:";
    }
};

class Derived : public Base {
    public:
    void display(){
        std::cout << "Derived class Display Method:";
    }
};


int main(){
    Derived obj;
    obj.display();
    obj.show();
    return  0;
}