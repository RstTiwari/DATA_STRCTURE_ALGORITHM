


'''
Basic Leve Data Types in Python

'''

# Numberic   --------  1) Int 2) Float  3) complex
# Dictionries
# Boolen
# Set
# Sequence Types  ---------  1) String , 2) List  , 3) Tuples
# Binary Types    -------    1) memoryView, 2) byteArray 3) bytes


'''Getting Dipper into each method With Details'''

#Numeric  
# 1)Int
# 2)floating
# 3)complex numbers


#Int
a = 5 
print(type(a))  # class int
#Basic Operations on int
int_a = 10
int_b = 20

#Performing Arithmetic operators on the Int numbers
print(int_a*int_b) # 200
print(int_a - int_b) # -10
print(int_a + int_b) # 30
print (int_a / int_b) # 0.5
print( int_b % int_a)  #  0 as reminder is 0
print( int_a % int_b)  # 10 as 10 is not divisible soo quotient  is 0 and remainder is 10  
print (int_a // int_b)  # 0 as quotient is 0
print(int_a ** int_b)  # 100000000000000000000



# Float
float_a = 5.03
float_b  = 10.043
print(type(float_a))   #class float
print(float_a * float_b)  # 50.51629  
print(float_a + float_b) # 15.073
print(float_a - float_b) #-5.012999999999999
print(float_a / float_b) # 0.5008463606492085
print(float_a % float_b)  # 5.03
print(float_a // float_b) # 0 as 0 is quotionet and reminder 
print(float_a ** float_b) # 11113408.39097823


com_a   = 5 +3j 
com_b    =  2 + 4j
com_c = complex(3,5)  # better way of writing the complex types
print(type(com_b))   # class complex
print(type(com_c))   

# Operations on the complex values
print(com_a * com_b) # (-2+26j)
print(com_a  + com_b) #(7+7j)
print(com_a - com_b) # (3-1j)
print(com_a / com_b)  #(1.1-0.7j)
#print(com_a % com_b) # not supported operation
#sprint(com_a // com_b)  # not supported Operation
print(com_a ** com_b)  # (-1.0802025771521078+3.762488118364735j)



#Dictionaries  

# 1) basically its Object of javaScript; 
# 2) dict is case senstive means key a will be diff from key A

dic_a = {"name":"rohit", "div":10, "add":"New wonderLand"}
dic_b  = {"name":"rahul","div":9,"add":"New land for the scholl"}
print(type(dic_a))
dic_a['name'] = dic_b["name"]
#print(dic_a["name"] = dic_b["name"]) # syntax Error # print function take somthing which can evaluted not assinged

for i in dic_a:
   print(i) # all the key values  = (name, div ,add)

print(dic_a.get("name"))  #  rohit => get Method
print(dic_a.get("schoo"))  # None    => if key id not found

values = dic_a.values()
print(values)    # dict_values(['rahul', 10, 'New wonderLand'])  not ittrable
keys = dic_a.keys()
print(keys)

print(dic_a.items())   #  dict_items([('name', 'rahul'), ('div', 10), ('add', 'New wonderLand')])  =< its not ittrablle

new_dic_a = dic_a.pop("name")
print(new_dic_a)   # rohit  as its written new value of pop item
print(dic_a)       #  {'div': 10, 'add': 'New wonderLand'}   => its modify the original dic_ vlaues


print(dic_a.setdefault("name","rajkumar"))  # rajkumar => as its written the new Valuse the being set

print(dic_a.update({"native_address":"goan in jaunpur"}))  # None  => as this method of dic class does not return anything 
print(dic_a)   # {'div': 10, 'add': 'New wonderLand', 'name': 'rajkumar', 'native_address': 'goan in jaunpur'}  => dic got updated
 
print(dic_a.clear()) # None  as it perp
print(dic_a)  # {}


# Boolean 
True
False


# Set   1) Mutable , 2)Iterable , 3) Has no duplicate number:


construct_a = set("rohit")   # constructor Mehtod
set_a  ={1,2,9,4,5}
set_b  ={2,4,5,6,7}
set_c= set(["rohit","tiwar","class"])  #  {rohit,tiwari,class} ==> as set  constructor expect on one arguWWWment
print(set_b)
set_c = set({"name"})
print(set_c)   #{'name'}


# math method of set
union = set_a | set_b
print(union,"union") # {1, 2, 4, 5, 6, 7, 9} union

interSection = set_a & set_b
print(interSection,"interSection") # {2, 4, 5} interSection


difference = set_a - set_b,
print(difference,"difference")  # ({1, 9},) difference   => value prsent in set_a but not in set_b

symetric_diffrence = set_a ^ set_b
print(symetric_diffrence,"symetric_diffrence")  # {1, 6, 7, 9}  values that is eighter not in set_a or in set_b


set_a.add(10)
print(set_a)
set_a.remove(1)  #  None =>  erros is raised if key not present
print(set_a)

print(set_a.discard(5))  #None   => not error if key is not present
print(set_a)

pop = set_a.pop()
print(set_a) #{4, 9, 10}

set_a.update(set_b)
print(set_a) # {2, 4, 5, 6, 7, 9, 10}
union = set_a.union(set_b)
print(union,"union")  #{2, 4, 5, 6, 7, 9, 10} union
print(set_a.intersection(set_b))  #{2, 4, 5, 6, 7}
print(set_a.difference(set_b))  #{9, 10}
print(set_a.symmetric_difference(set_b)) #{9, 10}




#Sequence Types -- 1) String 2) List 3) Tuples

#these are non-premtive types of data , 

#String
str_a = "rohit"   #normal method
str_b = str("rahul ")  #constructor method
print(type(str_a),type(set_b))

print(str_a + str_b)   # rohitrahul
#print(str_a - str_b)  # can not perform this method
#print(str_a*str_b)     #  can not be performed this method
print(len(str_a))
print(str_a[0:4]) #rohi
print(str_a[:len(str_a)-1])
print(str_a[::-1],":") # just reverse the whole string with big(O) = n

for i in range(len(str_a)) :
    print(i)  # 0,1,2,3,4
    print(str_a[i])  # r,o,h,i,t


for ele in str_a:
    print(ele,"--")

print(str_a.upper())  # ROHIT
print(str_a.lower())   # rohit
print(str_a.strip(" "))   #rohit
print(str_a.split(" "))    #rohit
print(str_a.find("h"))     #2
print(f"{str_a} and {str_b}")   # rohit and rahul    writing a dynamic string


#List      ==> just like an array in javascript

#creating List
list_a = [1,2,3,4,5]   #normal method

list_b = list([1,2,4,5,5])  # constructor method
print(list_a,list_b)

# accessing the list
print(list_a[0])     # 1
print(list_a[-1])    # 5
#list slicing
print(list_a[2:4]) # 3
print(list_a[1:])   #[2, 3, 4, 5]
print(list_a[::-1])  # [5, 4, 3, 2, 1]

#=> modifying List
list_a[0] = -1
print(list_a)

print(list_a.append(10))  # None as it replaces on the place
print(list_a) #  [-1, 2, 3, 4, 5, 10]
print(list_a.pop(3))  # 4 as on index 3 is 4
print(list_a)    # [-1, 2, 3, 5, 10]
print(list_a.insert(1,[10,230,10]))  # None as its replaces at its place
print(list_a)     # [-1, [10, 230, 10], 2, 3, 5, 10]
print(list_a.insert(3,10))
print(list_a)     # [-1, [10, 230, 10], 2, 10, 3, 5, 10]

print(list_a.extend([2,3,4]))  # None
print(list_a)         # [-1, [10, 230, 10], 2, 10, 3, 5, 10, 2, 3, 4]   => different from insert it can add whole  new Array into exisitn array


#=> deleting values form List

print(list_a.remove(3))  #None   => it takes one argument
print(list_a)  # [-1, [10, 230, 10], 2, 10, 5, 10, 2, 3, 4]   => removes first accurance the value

print(list_a.pop())  # 4 as value popedup => which occurs last in the array
print(list_a.pop(2))   # 2  as popedup => which occurs last in the array

#print(del list_a(3))    # as wrong as no statement can be declared in print 
print(list_a)  # [-1, [10, 230, 10], 10, 5, 10, 2, 3]
del  list_a[1]
print(list_a,'--')  #[-1, 10, 5, 10, 2, 3] --





# Tuples 
# 1) same as list contains the order of the values  
# 2) Tuples can contain any number of elements and of any datatype (like strings, integers, lists, etc.)
# 3) Tuples cannot be modified after it is created.

tup_a = ("rohit","tupes")  # normal method
tup_b = tuple(("ROhit",9 , True))  # constructor method






































                






'''
Advanced Level of Data Types in python
'''

# #Tuples
# #List
# #Ranges
#
# #Sets


# #Tuples
# t = 1,2,4,"rohit"
# print(type(t))


# #List 

# my_list = [1,2,4,5,6]
# print(len(my_list),"length")

# my_list.append(1)
# my_list.pop()
# my_list[2] = 10
# my_list.index(1)
# print(my_list)

# print(dir(my_list))
# rev_list = reversed(my_list) 
# print(rev_list)
# for num in my_list:
#     print(num)

# new_set = set(my_list)
# print(new_set)
