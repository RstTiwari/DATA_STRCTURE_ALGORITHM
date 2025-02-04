# def longestSubstring(string):
#     map = dict()
#     longest = ""
#     current = ""
#     for str in string:
#         if not str in map:
#              map.setdefault(str,None)

            
#         else:
#     return map
    
           



# print(longestSubstring("rohit")) 

def most_occurance (array):
    most = 0
    obj = {}
    for val in array :
        if obj.get(val):
            obj[val] = obj[val]+1
        else:
            obj[val] = 1
    print(obj)

    for key in obj:
        if obj.get(key) > most:
            most = obj.get(key)
            
    return most

print(most_occurance([1,2,3,1,1,3,4,4,3]))