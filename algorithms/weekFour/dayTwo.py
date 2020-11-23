from dayOne import SLNode, SList

my_list = SList()
my_list.addFront(1)
my_list.addBack(2)
my_list.addBack(3)
my_list.addBack(4)
my_list.printValues()
# print(my_list.head.value)
# print(my_list.head.next.next.value)
# print(my_list.head.next.next)
# my_list.container(2)
# my_list.addBack(6)
# my_list.printValues()
print('-'*10)

# length
# --------------------------------------------------------------------------------------------------
# Create a function that accepts a pointer to first list node, and returns number of nodes in sList.
def sListLength(head):
    if head is None:
        return("List is empty")
    else:
        runner = head
        counter = 0
        while runner is not None:
            counter +=1
            runner = runner.next
        return counter
print(sListLength(my_list.head))

# average
# --------------------------------------------------------------------------------------------------
# Create a standalone function average(node) that returns (…wait for it … ) the average of all values contained in that list.
def sListAverage(head):
    if head is None:
        return("List is empty")
    else:
        runner = head
        length = sListLength(head)
        sum = 0
        while runner is not None:
            sum += runner.value
            runner = runner.next
        return sum / length

print(sListAverage(my_list.head))


# min, max
# --------------------------------------------------------------------------------------------------
# Create function min(node) and max(node) to returning smallest and largest values in the list.
def sListMin(head):
    if head is None:
        return("List is empty")
    else:
        runner = head
        min = head.value
        while runner is not None:
            if runner.value < min:
                min = runner.value
            runner = runner.next
        return min

print(sListMin(my_list.head))

def sListMax(head):
    if head is None:
        return("List is empty")
    else:
        runner = head
        max = head.value
        while runner is not None:
            if runner.value > max:
                max = runner.value
            runner = runner.next
        return max

print(sListMax(my_list.head))


# display
# --------------------------------------------------------------------------------------------------
# Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

def sListDisplay(head):
    if head is None:
        return("List is empty")
    else:
        runner = head
        string = ""
        while runner is not None:
            string += str(runner.value) + ", "
            runner = runner.next
        return string

print(sListDisplay(my_list.head))


