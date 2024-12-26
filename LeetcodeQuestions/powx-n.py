def brute_force (x:float,n:int):
    result:float = 1.0
    for i in range(n):
        result = result*x

    return result    
   
print(brute_force(2,0))
#this will not work for zero to see optimal sol
def optimal(x:float,n:int):
    result = 1.0
    nn = n
    if n < 0 :
        nn = -1 * n
    while nn > 0:
        if nn % 2:
            result = result * x 
            nn = nn -1
        else:
            x = x*x
            nn = nn // 2

    if n < 0 :
        result = 1/result

    return result

print(optimal(2,-2))

def recursion(x:float,n:int):
    if n == 0:
        return 1
    return x * recursion(x ,n-1)


print(recursion(2,10))
  

print(1%2)