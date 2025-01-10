#Practising some of the list method and there different way of use
fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
fruits.append("orange")
print(fruits.index("orange",1))
fruits.sort()
fruits.pop()
print(fruits)



# to get this we are writing function
sequence =[]
for x in range(1,11):
    sequence.append(x**2)
print(sequence)

#to make this sorter we can still use lamda function
sequence1 = list(map(lambda x:x**2,range(10)))
print(sequence1)


#lamdaa function and there use
double = lambda x:x**2
print(double(10))

#use python list comprehension
square = [x**2 for x in range(10)]
print(square)

[(x,y ) for x in [2,3,4] for y in [4,6,3] if x != y]


freshFruit = ['  banana', '  loganberry ', 'passion fruit  ']
print([fruit.strip() for fruit in freshFruit])
print([(x, x**2) for x in  range(5)])


from math import pi
print([round(pi,i)  for i in range(4)])

matrix = [
    [1, 2, 3,],
    [5, 6, 7,],
    [9, 10, 11,],
]
m = len(matrix)
n = len(matrix[0])

# this how we  can find the transpose basically but there are better way to for sure to this thing
transpose = []
for i in range(m):
    tem_transpose = []
    for j in range(n):
        tem_transpose.append(matrix[j][i])
    transpose.append([tem_transpose])

print(transpose)

# simple sintax to do transpose of matrix
matrix1 = [
    [1, 2, 3,6],
    [5, 6, 7,6],
    [9, 10, 11,5],
]
transpose1 = []

print([[row[i]  for row in matrix1] for i in range(4)])
