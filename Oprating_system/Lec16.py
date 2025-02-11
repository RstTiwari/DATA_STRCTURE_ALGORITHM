# Understanding the Critical section area
import threading
import time


account_balance = 10000
lock = threading.Lock()


def deposit(amt: int):
    global account_balance
    with lock:
        current_balance = account_balance
        current_balance += amt
        account_balance = current_balance
        time.sleep(1)


def withdraw(amt: int):
    global account_balance
    with lock:
        current_balance = account_balance
        current_balance -= amt
        account_balance = current_balance
        time.sleep(2)


t1 = threading.Thread(target=deposit, args=(500,))
t2 = threading.Thread(target=withdraw, args=(300,))
t1.start()
t2.start()
t1.join()
t2.join()
print(account_balance)



