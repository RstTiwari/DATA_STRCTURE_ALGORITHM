import sys


def kande_naive(array: list):
    max_sum = 0
    n = len(array)
    for i in range(n):
        tem_sum = array[i]
        for j in range(i + 1, n):
            tem_sum = tem_sum + array[j]
            if tem_sum > max_sum:
                max_sum = tem_sum

    return max_sum


# Time Com = O(n^2)


def kande_better(array: list):
    max_sum = -sys.maxsize - 1
    n = len(array)
    tem_sum = 0
    for i in range(n):
        tem_sum =tem_sum + array[i]
        if tem_sum > max_sum:
            max_sum = tem_sum
            
        if tem_sum < 0:
            tem_sum = 0
    return max_sum

def kande_better_with_array(array):
    print("parivar")

if __name__ == "__main__":
    array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    array1 = [1]
    sum1 = kande_naive(array)
    print("kande algorithm for naive approch", sum1)
    max_sum1 = kande_better(array1)
    print("kande algorith for better", max_sum1)
