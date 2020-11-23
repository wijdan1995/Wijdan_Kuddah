from dayOne import SLNode, SList
my_list = SList()
my_list.addFront(1)
my_list.addBack(2)
my_list.addBack(3)
my_list.addBack(4)
my_list.addBack(8)
my_list.addBack(6)
my_list.addBack(9)
my_list.printValues()
my_list_2 = SList()
my_list_2.addFront(8)
my_list_2.addBack(9)
my_list_2.addBack(10)
my_list_2.addBack(11)
my_list_2.addBack(12)
my_list_2.addBack(13)
my_list_2.addBack(14)
# my_list_2.printValues()
print('-'*10)
# Second Largest Value
# ------------------------------------------------------------------------------------
# Given a pointer to the first node in a singly linked list, return the second-largest value in the list.
def secondLargestValue(SList):
    if SList.head is None:
        return("List is empty")
    else:
        runner = SList.head
        largest = runner
        # secondLargest = runner
        while runner is not None:
            # if runner.value > secondLargest.value and secondLargest.value < largest.value :
            #     print('before secondLargest:',secondLargest.value)
            #     secondLargest = runner
            #     print('secondLargest:',secondLargest.value)
            if runner.value > largest.value:
                secondLargest = largest
                print('secondLargest:',secondLargest.value)
                largest = runner
                print('largest:',largest.value)
            runner = runner.next
    return secondLargest.value

# Zip SLists
# ------------------------------------------------------------------------------------
# Provided two pointers to independent linked lists 'zip' the two lists together be alternating nodes.  Start with the first list, and return the new list.
# 
def zipSLists(SList1, SList2):
    if SList1.head or SList2.head is None:
        return("List is empty")
    else:
        runner = SList1.head
        runner.next = SList2.head
        while runner is not None:
            pass
        return True



print(secondLargestValue(my_list))
print(secondLargestValue(my_list_2))
# zipSLists(my_list,my_list_2)

# my_list.printValues()
# my_list_2.printValues()