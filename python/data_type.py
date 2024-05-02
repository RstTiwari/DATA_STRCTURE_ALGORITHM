##
'''
Basic Leve Data Types in Python
'''

#Inte
#floating
#String
#bool
#complex numbers

'''
Advanced Level of Data Types in python
'''

#Tuples
#List
#Ranges
#Dictioneries
#Sets


#Tuples
t = 1,2,4,"rohit"
print(type(t))


#List 

my_list = [1,2,4,5,6]
print(len(my_list),"length")

my_list.append(1)
my_list.pop()
my_list[2] = 10
my_list.index(1)
print(my_list)

print(dir(my_list))
rev_list = reversed(my_list) 
print(rev_list)
for num in my_list:
    print(num)

new_set = set(my_list)
print(new_set)
