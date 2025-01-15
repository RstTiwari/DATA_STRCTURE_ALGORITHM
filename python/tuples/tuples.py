#Tuples In Details
t = 13543 , 434443, 4843747
print(t[0])
print(t)  # (13543 , 434443 , 4843747)  // incoded inside a ()

s = t , "heloo"
print(s)

# s[0] = "123434"   does not support

#tuples can contain mutable object
v = ([2,4,5,6],[4,4,6,3],[12])
print(v)
v[2][0] = "j"
print(v)

#str also does not support's assignment
# s = "rohit"
# for i in range(len(s)):
#     if i == 0:
#         s[i] = "r"
