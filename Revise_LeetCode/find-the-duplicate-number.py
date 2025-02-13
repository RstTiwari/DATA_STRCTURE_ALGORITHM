def findtheduplicate(array):
    has_map = {}
    for i in array:
        if has_map.get(i):
            has_map.update({i:has_map.get(i) + 1})
        else:
            has_map.update({i:1})

    for [key, val] in has_map:
        if val >= 2:
            return key
