
#include <iostream>

class BankAccount {
    private:
     double balance;

    // let hat settr method
    public: 
    void setBalance(double amount)
        {
            if (amount > 0)
            {
                balance += amount;
            }
            else
            {
                throw std::invalid_argument("Amount must be positive");
            }
        };

        public:
        double getBalance()const{
            return balance;
        };
};


class  User {
    private:
    std::string passwordHash;

    public:
    void setPassword(const std::string &password){
        passwordHash = (password);
    }

    public:
    std::string getPasswordHash()const{
        return passwordHash;
    }
};


int main(){
    BankAccount account ;
    account.setBalance(10000.123);
    std::cout << "Current Balance:" << account.getBalance() << std::endl;
    return 0;
}