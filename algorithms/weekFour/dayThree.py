from dayOne import SLNode, SList
my_list = SList()
my_list.addFront(1)
my_list.addBack(2)
my_list.addBack(3)
my_list.addBack(4)
# my_list.printValues()
# print(my_list.head.value)
# print(my_list.head.next.next.value)
# print(my_list.head.next.next)
# my_list.container(2)
# my_list.addBack(6)
# my_list.printValues()
print('-'*10)
# removeVal
# -----------------------------------------------------------------------------
# Create removeVal(list,value) that removes from our list the node with the given value. Return the new list.
def removeVal(SList, value):
    if SList.head is None:
            print("List is empty")
    else:
        if SList.head.value == value:
            SList.head = SList.head.next
            return True
        preNode = SList.head
        while preNode.next:
            if preNode.next.value == value:
                preNode.next = preNode.next.next
                return True
            preNode = preNode.next
        print("Value not found")
        return False
# removeVal(my_list, 1)
# removeVal(my_list, 4)
# my_list.printValues()
# prependVal
# -----------------------------------------------------------------------------
# Create prependVal(list,value,before) that inserts a listNode with given value immediately before the node with before (or at end). Return the new list.
def prependVal(SList, value, before):
    if SList.head is None:
            print("List is empty")
    else:
        if SList.head.value == before:
            new_node = SLNode(value)
            new_node.next =  SList.head
            SList.head = new_node
            return True
        preNode = SList.head
        while preNode.next:
            if preNode.next.value == before:
                new_node = SLNode(value)
                new_node.next =  preNode.next
                preNode.next = new_node
                return True
            preNode = preNode.next
        print("Value not found")
        return False
prependVal(my_list, 55,1)
prependVal(my_list, 33,3)
prependVal(my_list, 10,5)
# my_list.printValues()
# appendVal
# -----------------------------------------------------------------------------
# Create appendVal(list,value,after) that inserts a new listNode with given value immediately after the node containing after (or at end). Return the new list.
def appendVal(SList, value, after):
    if SList.head is None:
        SList.addFront(value)
    else:
        index = SList.head
        new_node = SLNode(value)
        added = False
        while (index):
            if(index.value == after):
                new_node.next = index.next
                index.next = new_node
                added = True
                break
            index = index.next
        if added == False:
            SList.addBack(value)