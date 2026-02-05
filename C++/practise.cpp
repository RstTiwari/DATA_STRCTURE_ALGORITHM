#include <iostream>
using namespace std;

int main()
{
  cout << "Hello World!";
  cout << "this is c++17 programe";
  cout << 2;
  cout << 2 * 4;
  cout << 9 % 4;
  cout << "this is the old linr \n";
  cout << "this is also old line in diffrent way" << "\n"
       << "this other line on the chart";
  // this is single line commeent
  /* this is
     multi line
     comment */

  int x = 5, y = 10, z = 15;
  cout << x << y << z << "\n";
  const char name = 'R';
  float pi = 3.14;
  double largeDecial = 3.1273447474747;
  cout << name << pi << largeDecial << "\n";
  // tring to learn about arrays
  int marks[5]= {23, 45, 56, 78, 89};
  cout << sizeof(marks)/ sizeof(marks[0]) << "\n"; 
  cout  << size(marks) << "\n"; 

  // now creating a structure to understand this in better way
  struct Student {
    string name;
    int age;
    char grade;
  };

  Student student1;
  student1.name = "Rohit";
  student1.age = 20;
  student1.grade = 'A';
  cout << student1.name << "  ";

  enum Color {
    LOW,
    HIGH = 2,
    MEDIUM,
  };

  enum Color myColor = HIGH;
  switch (myColor){
    case 1:
    cout << "Colour is one";
    case 2:
    cout << "Colour is two";
  }

  // Ref variables in c++
  int a = 10 ;
  int &refA = a;
  a = 20;
  cout << refA << "\n";


  // Memory Address in c++
  int var = 30;
  cout << "Memory Address of var is:" << &var;

  // pointers in c++
  int* ptr = &var;
  cout << "ptr value is " << ptr;

  // Dereferencing pointer
  cout << "Value at pt is"<< *ptr;


  //chaning the value using the pointer
  string food = "Pizaa";
  string* ptrFood = &food;
   *ptrFood = "Burger";
   cout << food;

   int *pts =  &var;


   // Writing my own lambda fucntion 
   auto add =[](int a, int b ){
    return a+b;
   };
   cout << '\n' << add(4,2) << "\n";
  return 0;
}


