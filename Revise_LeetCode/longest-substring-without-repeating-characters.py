
# the better approach for this is using the two pointer method

def better_approach(string:str):
    max_length = 0
    n = len(string)
    has_set = set()
    l = 0
    r = 0
    while r < n:
        if string[r] not in has_set:
            max_length = max(max_length,r-l+1)
            has_set.add(string[r])
            r += 1
        else:
            has_set.remove(string[l])  
            l += 1
        
    return max_length





print(better_approach("pwwkew"))
    