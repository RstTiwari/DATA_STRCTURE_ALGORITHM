# Concurrency

"""Concurrency refers to the ability of an operating system to handle multiple tasks at the same time. However,
it doesn't necessarily mean tasks are executed at the same time — they can be interleaved, where the CPU switches 
between tasks quickly to give the illusion of simultaneous execution."""
import asyncio


async def con_a_task():
    print("Con Task A Started")
    await asyncio.sleep(2)
    print("Con Task A Completed")


async def con_b_task():
    print("Con Task b started")
    await asyncio.sleep(1)
    print("concurrent task b completed")


async def main():
    await asyncio.gather(con_a_task(), con_b_task())


if __name__ == "__main__":
    asyncio.run(main())


# MultiThreading
import threading
import time


def print_numbers():
    for i in range(5):
        time.sleep(0.1)
        print(i)


def print_char():
    for s in "abcde":
        time.sleep(0.1)
        print(s)


thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_char)
thread1.start()
thread2.start()
thread1.join()
thread1.join()
print("Main program is not waiting for threads to finish!")
