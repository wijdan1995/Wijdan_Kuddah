# Queue - FIFO
# ------------------------------------------------
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
# Front
# ------------------------------------------------
# Create slQueue method front() to return the value at front of our queue, without removing it.
    def front(self):
        if self.head is None:
            print('the queue is empty')
            return False
        else:
            return self.head.value
# Is Empty
# ------------------------------------------------
# Create slQueue method isEmpty() that returns whether our queue contains no values.
    def isEmpty(self):
        if self.head is None:
            return True
        else:
            return False
# Enqueue
# ------------------------------------------------
# Create slQueue method enqueue(val) to add the given value to end of our queue. Remember, slQueue uses a singly linked list (not an array). 
    def enqueue(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        return self
# Dequeue
# ------------------------------------------------
# Create slQueue method dequeue() to remove and return the value at front of queue. Remember, slQueue uses a singly linked list (not array).
    def dequeue(self):
        if self.head is None:
            print('the queue is empty')
            return False
        elif self.head is self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
            return self.head.value
# Contains
# ------------------------------------------------
# Create method contains(val) to return whether given value is found within our queue.
    def contains(self, value):
        if self.head is None:
            print("queue is empty")
        else:
            nextNode = self.head
            while nextNode:
                if nextNode.value == value:
                    # print("Value found")
                    return True
                nextNode = nextNode.next
            # print("Value not found")
            return False
# Size
# ------------------------------------------------
# Create slQueue method size() that returns the number of values in our queue.
    def size(self):
        if self.head is None:
            print("queue is empty")
        else:
            runner = self.head
            counter = 0
            while runner:
                counter += 1
                runner = runner.next
            return counter

my_queue = Queue().enqueue(1).enqueue(2).enqueue(3)
print(my_queue.head.value)
print("Queue size",my_queue.size())
my_queue.dequeue()
print("front val",my_queue.front())
my_queue.dequeue()
print(my_queue.head.value)
print(my_queue.tail.value)
print("contains 3", my_queue.contains(3))
print("is empty", my_queue.isEmpty())
my_queue.dequeue()