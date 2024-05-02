##Using * and ** in the fucntion
## basically its desutructing the object 


def function(a,b):
    print(a,b)

args = {"name":"rohit","std":10}
function(*args)


def function2(*args):
    print(args)


args2 = [1,2,3,4,5]
function2(*args2)