#include  <iostream>
#include <list>
#include <string>
using namespace std;

int main()
{
    std::list<std::string> cars = {"BMW", "VOLOV", "TESLA"};

    for (std::string car : cars)
    {
        std::cout << car <<"\n";
        
    }
    std::cout << cars.front();

    //get the last  element 
    std::cout  << cars.back();
    return 0;
}
