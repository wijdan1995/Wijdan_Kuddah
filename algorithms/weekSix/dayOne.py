import math
# Recursion
# --------------------------------------------------------------------------------------------------

# rSigma
# --------------------------------------------------------------------------------------------------
# Write a recursive function that, given a number, returns the sum of integers from one up to that number. For example:
# rSigma(5) = 1+2+3+4+5 = 15
# rSigma(2.5) = 1+2 = 3
# rSigma(-1) = 0.
def rSigma(n):
    n = math.floor(n)
    if n <= 0:
        return 0
    else:
        return n + rSigma(n-1) # n + (n-1) + (n-2) +..+ 0
print(rSigma(5))
print(rSigma(2.5))
print(rSigma(-1))
# rFactorial
# --------------------------------------------------------------------------------------------------
# Given a number, return the product of integers from 1 upward to that number. If less than zero, treat as
# zero. If not an integer, treat as an integer. Mathematicians tell us that 0! is equal to 1, so make
# rFact(0) = 1. Examples: 
# rFact(3) = 6 (1*2*3)
# rFact(6.5) = 720 (1*2*3*4*5*6)
def rFact(n):
    n = math.floor(n)
    if n <= 0:
        return 1
    else:
        return n * rFact(n-1)
print(rFact(0))
print(rFact(3))
print(rFact(6.5))

# rBinarySearch
# --------------------------------------------------------------------------------------------------
# Write a recursive function that, given a sorted array and a value, determines whether the value is found within the array. For example,
# rBinarySearch([1,3,5,6], 4) = false
# rBinarySearch([4,5,6,8,12], 5) = true
def rBinarySearch(arr, value):
    if len(arr) == 0:
        return False
    else:
        mid = math.floor(len(arr)/2)
        if ( value == arr[mid]):
            return True
        elif ( value > arr[mid]) :
            arr = arr[mid+1:len(arr)]
            return rBinarySearch(arr,value)
        elif ( value < arr[mid]):
            arr = arr[0:mid]
            return rBinarySearch(arr,value)

print(rBinarySearch([1,3,5,6], 4))
print(rBinarySearch([4,5,6,8,12], 5))
print(rBinarySearch([4,5,6,8,12], 12))