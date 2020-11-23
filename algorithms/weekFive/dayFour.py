# Circular Queues
# ------------------------------------------------------------------------
# When Queue’s tail or head approaches ‘size’, wrap around to [0] and continue. We cannot let tail and head meet – one can’t “lap” the other. Instead, enqueue(val) should fail: Queue is full. Ditto dequeue() if Queue is empty. Constructor requires a size argument. Starting there, let’s create a circular queue implementation!

class CirQueue():
    def __init__(self, cap):
        self.head = 0
        self.tail = 0
        self.capacity = cap
        self.data = [None]*cap

# Enqueue -tail
# ------------------------------------------------------------------------
# Create enqueue(val) that adds val to our circular queue. Return false on fail. Wrap if needed!
    def enqueue(self, val):
        if self.tail < self.capacity:  
            self.data[self.tail] = val
            self.tail += 1
        elif self.head > 0 and self.tail >= self.capacity:
            self.tail == self.head - 1
        else:
            return False

# Front
# ------------------------------------------------------------------------
# Return (not remove) the queue’s front value.
    def front(self):
        return self.data[self.head]


# Is Empty
# ------------------------------------------------------------------------
# Return whether queue is empty.
    def isEmpty(self):
        if self.tail == 0:
            return True
        else:
            return False

# Is Full - if len and size are ==
# ------------------------------------------------------------------------
# Return whether queue is full.
    def isFull(self):
        if self.tail == self.capacity :
            return True
        else:
            return False

# Dequeue -head
# ------------------------------------------------------------------------
# Create cirQueue method dequeue() that removes and returns the front value. Return null on fail.
    def dequeue(self):
        pass

# Contains
# ------------------------------------------------------------------------
# Return whether given val is within the queue.
    def contains(self, val):
        for item in self.data:
            if val == item:
                return True
        return False

# Size
# ------------------------------------------------------------------------
# Return number of queued vals (not capacity).
    def size(self):
        size = 0
        for val in self.data:
            if val:
                size +=1
        return size

my_list = CirQueue(5)
print(my_list.front())
print("is empty",my_list.isEmpty())
print("is full",my_list.isFull())
my_list.enqueue(5)
my_list.enqueue(2)
print("contains 2",my_list.contains(2))
print("contains 1",my_list.contains(1))
my_list.enqueue(3)
print("size",my_list.size())
my_list.enqueue(4)
my_list.enqueue(46)
my_list.enqueue(46)
print("size",my_list.size())
print("is empty",my_list.isEmpty())
print("is full",my_list.isFull())
print(my_list.front())
print(my_list.data)
