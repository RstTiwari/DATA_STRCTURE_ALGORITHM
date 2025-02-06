import sys
def kande_naive(array:list):
    max_sum = 0
    n = len(array)
    for i in range(n):
        tem_sum = array[i]
        for j in range(i+1,n):
            tem_sum = tem_sum + array[j]
            if tem_sum > max_sum:
                max_sum = tem_sum
       
    return max_sum

# Time Com = O(n^2)
























if __name__ == "__main__":
    array =  [-2,1,-3,4,-1,2,1,-5,4]
    sum1 = kande_naive(array)
    print("kande algorithm for naive approch",sum1)
