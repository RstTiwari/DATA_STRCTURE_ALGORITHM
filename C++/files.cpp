#include <iostream>
# include <fstream>


int main(){
    std::ofstream fout("out.txt");
    fout << "Hello file handilig in c++19 " << std::endl;
    fout << "This is the second line in the file." << std::endl;

    std::ifstream fin("out.txt");
    std:: string line;
    while (std::getline(fin ,line)){
        std::cout << line << std:: endl;
    }

    fout.close();
    fin.close();

    std::string line1;
    std:: fstream file ("data.txt", std::ios::in | std::ios::out);
    file << "this is the test line added latter on  for checking purpose";
    file.seekg(0);
    while(std::getline(file,line1)){
         std::cout << line << std::endl;
    }

    file.close();
    return 0;

}
