
# Node
class SLNode:
    #    - Constructor
    #       -val
    #       - next
    def __init__(self, value):
        self.value = value
        self.next = None

# SinglyLinkList
#    -Constructor
#        - head
class SList:
    def __init__(self):
        self.head = None

#    - addFront(val)
#        - add a new node to the beginning of the list
    def addFront(self, val):
        new_node = SLNode(val)
        new_node.next = self.head
        self.head = new_node

#    - removeFront()
#       - removes and returns the first node of the list
    def removeFront(self):
        if self.head is None:
            print("The list is empty nothing to delete")
        self.head = self.head.next
        return self.head

#    -  addBack(val)
#        - add new node to the end of the list
    def addBack(self, val):
        new_node = SLNode(val)
        if self.head is None:
            self.head = new_node

        lastNode = self.head
        while lastNode.next is not None:
            lastNode= lastNode.next
        lastNode.next = new_node

#    - removeBack()
#    - removes and returns the last node of the list
    def removeBack(self):
        if self.head is None:
            print("The list is empty nothing to delete")
        elif self.head.next is None:
            self.head = None
        else:
            lastNode = self.head
            while lastNode.next.next is not None:
                lastNode = lastNode.next
            lastNode.next = None
            return lastNode

#    - container(val)
#       - returns a boolean on whether or not the val is in the list
    def container(self, val):
        if self.head is None:
            print("List is empty")
        nextNode = self.head
        while nextNode is not None:
            if nextNode.value == val:
                print("Value found")
                return True
            nextNode = nextNode.next
        print("Value not found")
        return False

    def printValues(self):
        if self.head is None:
            print("List is empty")
        runner = self.head
        while runner is not None:
            print(runner.value, end=",")
            runner = runner.next
        print("")
my_list = SList()
my_list.addFront('jim')
my_list.addFront('andy')
my_list.addBack('dany')
my_list.addBack('dany')

# Recursive Fibonacci
# ------------------------------------------------------------------------------------------------------------------------
# Write rFib(num). Recursively compute and return the numth Fibonacci value. As earlier, treat the first two (num = 0, num = 1) Fibonacci values as 0 and 1. Thus:
# rFib(2) = 1 (0+1)
# rFib(3) = 2 (1+1)
# rFib(4) = 3 (1+2)
# rFib(5) = 5 (2+3)
# rFib(3.65) = rFib(3) = 2
# rFib(-2) = rFib(0) = 0.
def rFib(num):
    num = int(num)
    if num <= 0:
        return 0
    if num == 1:
        return 1
    return rFib(num-1) + rFib(num-2)
print(rFib(3))
print(rFib(3.65))

# rListLength
# ------------------------------------------------------------------------------------------------------------------------
# Given the first node of a singly linked list, create a recursive function that returns the number of nodes in that list. You can assume the list contains no loops, and that it is short enough that you will not ‘blow your stack’.
def rListLength(head):
    if head is None:
        return 0
    else:
        return rListLength(head.next) + 1

print(rListLength(my_list.head))