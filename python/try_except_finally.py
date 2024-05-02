


try:
    print(2/0)
except:
    print("error occured")
finally:
    print("the try and except block completed")



try:
    print(2/0)
except Exception as e:
    print("you can't divide by Zero",e)

print(dir(OSError),"---")

# from  time import sleep

# while (i:= 1) <= 5:
#     try:
#         print("try and stop")
#         sleep(1)
#         i = i + 1
#     except Exception as e:
#         print("an error occunred",e)



#Raising a custom errr 

try:
    user = False
    if user:
        print("user Exist")
    else:
        raise OSError("user not exist")        
except Exception as e:
    print(e)



