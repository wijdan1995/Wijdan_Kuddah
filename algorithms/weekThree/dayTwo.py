# Remove Blanks
#---------------------------------------------------------------------------------------------
# Create a function that, given a string, returns the string, without blanks. Given " play that
# Funky Music ", returns a string containing "playthatFunkyMusic".
def removeBlanks(string):
    newStr = ""
    for i in range(len(string)):
        if string[i] != " ":
            newStr += string[i]
    return newStr
print(removeBlanks(" play that Funky Music "))

def removeBlanks2(string):
    for i in range(len(string)):
        if i == len(string) -1:
            break
        if string[i] == " ":
            string = string[:i] + string[i+1:]
            # print(i)
            # print(str)
            # print(range(len(str)))
    return string
print(removeBlanks2(" play that Funky Music "))

# Get String Digits
#---------------------------------------------------------------------------------------------
# Create a JavaScript function that given a string, returns the integer made from the string’s
# digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1,357,924,680.
def getStringDigits(string):
    newDigit = ""
    for i in range(len(string)):
        if string[i].isdigit():
            newDigit += string[i]
    return int(newDigit)
print(getStringDigits("0s1a3y5w7h9a2t4?6!8?0"))



# Acronyms
#---------------------------------------------------------------------------------------------
# Create a function that, given a string, returns the string’s acronym (first letters only,
# capitalized). Given "there's no free lunch - gotta pay yer way", return "TNFL-GPYW". Given
# "Live from New York, it's Saturday Night!", return "LFNYISN".
def acronyms(string):
    acronym = ""
    if string[0] != " ":
        acronym += string[0]
    for i in range(1,len(string)):
        if i == len(string) -1:
            break
        if string[i] == " ":
            acronym += string[i+1]
    return acronym.upper()
print(acronyms("there's no free lunch - gotta pay yer way"))
print(acronyms("Live from New York, it's Saturday Night!"))

def acronyms2(string):
    acronym = ""
    for i in range(len(string), 0, -1):
        print(i)
        # if i == len(string) -1:
        #     break
        if string[i] == " ":
            string[i -1]
            # acronym = acronym + string[i-1]
    return acronym.upper()
print(acronyms2("there's no free lunch - gotta pay yer way "))
print(acronyms2("Live from New York, it's Saturday Night !"))