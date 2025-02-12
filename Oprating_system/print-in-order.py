from threading import *
class Foo:
    def __init__(self):
        self.cv = Condition()
        self.turn = 0

    def first(self, printFirst: 'Callable[[], None]') -> None:
        
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        with self.cv:
            self.turn = 1
            self.cv.notify_all()


    def second(self, printSecond: 'Callable[[], None]') -> None:
        with self.cv:
            while self.turn != 1:
                self.cv.wait()
                # printSecond() outputs "second". Do not change or remove this line.
            printSecond()
            self.turn = 2
            self.cv.notify_all()

    def third(self, printThird: 'Callable[[], None]') -> None:
        with self.cv:
            while self.turn != 2:
                self.cv.wait()
                # printThird() outputs "third". Do not change or remove this line.
            printThird()
    