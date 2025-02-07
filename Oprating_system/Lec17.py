# Thread based parallelism in python using conditional variable
from  threading import *

cond = Condition()
done = 1 


def task(name):
    global done
    with cond:
        if done == 1:
            done = 2
            print("process entered in ", name)
            cond.wait()
            print("thread1 is completed")
        else:
            print("thread has been started", name)
            for i in range(5):
                print(i)
            cond.notify_all()
            print("thread to notify all system")


# understanding the semaphore use case in our scenario
sem = Semaphore(2)  # Binary Type semaphore to store the value


def task2(name):
    print(f"the system is  going to acquire by by thread {name}")
    sem.acquire()
    # do ing the intense care task
    for i in range(3):
        print(f"the intense care task are {i}")
    sem.release()
    print(f"the system is  going to released by thread {name}")


if __name__ == "__main__":
    t1 = Thread(target=task, args=("t1",))
    t2 = Thread(target=task, args=("t2",))
    t1.start()
    t2.start()
    thread = []
    for i in range(5):
        thread.append(Thread(target=task2, args=(f"thread-{i}",)))
        thread[i].start()
        

    for t in thread:
        t.join()
