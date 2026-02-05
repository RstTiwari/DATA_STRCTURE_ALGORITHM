#include <iostream>

template <typename T>

class Sample {
    private:
    T data;

    public:
    Sample(T v ){
        data = v;
    }

    public:
    void setDate(T value){
        data = value;
    }

    T getData()  const {
        return data;
    }
};



int main (){
    Sample<int>  sampleInt(10);
    Sample <std::string> sampleString("Hello Templated");    
    std:: cout << "Integer Data: " << sampleInt.getData() << std::endl;
    std::vector<std::string> array;
}