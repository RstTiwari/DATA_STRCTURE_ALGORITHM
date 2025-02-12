def merge(left, right, count):
    n = len(left)
    start = 0
    while start < n:
        if left[start] > right[start]:
            count += n - start
        else:
            left.pop(start)
        start += 1
    return count


def merge_sort(array: list, left ,right):
    cnt = 0
    if left >= right:
        return cnt
    mid = n // 2
    cnt += merge_sort(array, left ,mid)
    cnt += merge_sort(array, mid,right)
    cnt += merge(left, right, count)
    return count

def number_inversion(array,n):
    n = len(array)
    return merge_sort(array,0,n-1)

if __name__ == "__main__":
    a = [5, 4, 3, 2, 1]
    n = 5
    cnt = optimal_solution_with_merge(a, n)
    print("The number of inversions are:", cnt)
