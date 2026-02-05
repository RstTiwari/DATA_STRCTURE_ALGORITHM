#include <iostream>
#include <map>
#include <list>
using namespace std;

class Soltution
{
public:
    int vector twoSum(vector<int> &arr, int target)
    {
        map<int, int> mp;
        list<int, int> result;
        int size = arr.size();
        for (int i = 0; i < size; i++)
        {
            int complement = target - vector[i];
            if (mp.find(complement))
            {
                list.push(complement);
            }
            else
            {
                mp[arr[i]] = i;
            }
        }
        return vector;
    }
}

int
main()
{

    solution = Soltution()

        list<int, int>
            twoSum = solution([ 1, 2, 4, 5, 3 ], 6)

                return 0;
}
