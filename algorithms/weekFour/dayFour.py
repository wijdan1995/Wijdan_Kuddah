from dayOne import SLNode, SList
from dayThree import removeVal, appendVal, prependVal
my_list = SList()
my_list.addFront(1)
my_list.addBack(2)
my_list.addBack(-3)
my_list.addBack(4)
my_list.addBack(-4)
my_list.addBack(10)
my_list.addBack(-6)
my_list.printValues()
print('-'*10)

# Remove Negatives
# ------------------------------------------------------------------------------------
# Given a pointer to the head node of a singly linked list, remove any nodes containing negative values and return the list.
def removeNegatives(SList):
    if SList.head is None:
        print("List is empty")
    else:
        currentNode = SList.head
        while currentNode:
            if currentNode.value < 0:
                removeVal(SList, currentNode.value)
            currentNode = currentNode.next
removeNegatives(my_list)
my_list.printValues()

# def removeNegatives2(SList):
#     if SList.head is None:
#         print("List is empty")
#     else:
#         if SList.head.value < 0:
#             SList.head = SList.head.next
#         preNode = SList.head
#         while preNode.next.next:
#             if preNode.next.value < 0:
#                 preNode.next = preNode.next.next
#             preNode = preNode.next
#         if preNode.value > 0:
#             my_list.removeBack()
# removeNegatives2(my_list)
# my_list.printValues()

# Partition
# ------------------------------------------------------------------------------------
# Create partition(ListNode, value) that locates the first node with that value, and moves all nodes with values less than that value to be earlier, and all nodes with values greater than that value to be later.  Otherwise, original order need not ve perfectly preserved. return the new head ListNode.
# def partition(SList, value):
#     if SList.head is None:
#         print("List is empty")
#     else:
#         pass

def partition(ListNode, value):
    index = ListNode.head
    indexOfValue = None
    
    while index:
        if(index.value == value):
            indexOfValue = index
            break
        index = index.next
    
    # print(indexOfValue.next.value,indexOfValue.value)
    
    index2 = ListNode.head
    
    while index2.value:
        if(index2.value > indexOfValue.value):
            # print('Grater',index2.value)
            removed = index2.value
            removeVal(ListNode,index2.value)
            appendVal(ListNode,removed,indexOfValue.value)
            # print(removed)
        if(index2.value == indexOfValue.value):
            break
        index2 = index2.next
        
    
    index3 = indexOfValue
    
    while index3:
        if(index3.value < indexOfValue.value):
            print('Less',index3.value)
            removed = index3.value
            removeVal(ListNode,index3.value)
            prependVal(ListNode,removed,indexOfValue.value)
            # print(removed)
        index3 = index3.next

my_list_center = SList()
my_list_center.addFront(11)
my_list_center.addBack(2)
my_list_center.addBack(7)
my_list_center.addBack(3)
my_list_center.addBack(4)
my_list_center.addBack(10)
my_list_center.addBack(1)
my_list_center.addBack(20)
my_list_center.addBack(5)
my_list_center.printValues()
partition(my_list_center,4)
my_list_center.printValues()
