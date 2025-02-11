def merge_sorted_array(left,right,count):
    while left and right:
        

def optimal_solution_with_merge(array:list):
    n = len(array)
    count = 0
    mid = n // 2
    left = array[:mid]
    right = array[mid:]
    count  += merge_sorted_array(left,right,count)
    return count
    
    