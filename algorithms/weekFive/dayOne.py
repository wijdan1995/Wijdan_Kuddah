# Stack LIFO
# ------------------------------------------------
# Node
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.head = None

# Stack Push
# ------------------------------------------------
# Create push(val) that adds val to our stack.
    def push(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node
            # lastNode = self.head
            # while lastNode.next:
            #     lastNode = lastNode.next
            # lastNode.next = new_node
        return self

# Stack Top
# ------------------------------------------------
# Return (not remove) the stack’s top value.
    def top(self):
        if self.head is None:
            return ('the stack is empty')
        else:
            # lastNode = self.head
            # while lastNode.next:
            #     lastNode = lastNode.next
            # return lastNode.value
            return self.head.value

# Stack Is empty
# ------------------------------------------------
# Return whether the stack is empty.
    def isEmpty(self):
        if self.head is None:
            return True
        else:
            return False

# Stack Pop
# ------------------------------------------------
# Create pop() to remove and return the top val.
    def pop(self):
        if self.head is None:
            return ('the stack is empty')
        elif self.head.next is None:
            value = self.head.value
            self.head = None
            return value
        else:
            # lastNode = self.head
            # while lastNode.next.next is not None:
            #     lastNode = lastNode.next
            # lastNode.next = None
            # return lastNode.value
            self.head = self.head.next
            return self.head.value

# Stack Contains
# ------------------------------------------------
# Return whether given val is within the stack.
    def contains(self, value):
        if self.head is None:
            print("List is empty")
        else:
            nextNode = self.head
            while nextNode:
                if nextNode.value == value:
                    # print("Value found")
                    return True
                nextNode = nextNode.next
            # print("Value not found")
            return False
# Stack Size
# ------------------------------------------------
# Return the number of stacked values. 
    def size(self):
        if self.head is None:
            print("List is empty")
        else:
            runner = self.head
            counter = 0
            while runner:
                counter += 1
                runner = runner.next
            return counter

    def printValues(self):
        if self.head is None:
            print("Stack is empty")
        runner = self.head
        while runner is not None:
            print(runner.value, end=",")
            runner = runner.next
        print("")

# my_stack = Stack()
# my_stack.push(1).push(2).push(3)
# my_stack.printValues()
# print(my_stack.top())
# print("size", my_stack.size())
# print("contains 2",my_stack.contains(2))
# print("contains 4",my_stack.contains(4))
# print("is empty", my_stack.isEmpty())
# my_stack.pop()
# my_stack.printValues()
# my_stack.pop()
# print("size", my_stack.size())
# print(my_stack.top())
# my_stack.pop()
# print("is empty", my_stack.isEmpty())
# my_stack.printValues()
# print(my_stack.pop())

