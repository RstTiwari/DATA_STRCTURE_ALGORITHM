#include <iostream>
#include <vector>
using namespace std;

int main(){

    vector<string> vars  = {"nama","class","objectd"};
    cout << &vars;
    for (string car :vars){
        cout << car << endl;
    }
    vars[0];
    vars.front();
    vars.back();
    vars.at(1);
    vars[1] = "rohit";
    cout << vars[1];
    return 0;
}