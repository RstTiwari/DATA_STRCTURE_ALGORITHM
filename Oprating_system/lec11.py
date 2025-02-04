#Oraphange Process

import time
import os
import multiprocessing

def child_process():
    print(f"the child process {os.getpid()}")
    time.sleep(20)
    print(f"the child process completed ")
    

def parent_process():
    print(f"parent process exited {os.getpid()}")
    exit()
    

if __name__=="__main__":
    process = multiprocessing.Process(target=child_process)
    process.start()
    
    parent_process()

