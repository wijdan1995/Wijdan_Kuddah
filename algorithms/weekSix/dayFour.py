# FloodFill
# ------------------------------------------------------------------------------------------------------------
canvas2D = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
]

def floodFill(map,startXY,newColor, oldColor=None):
    # print(map[2][2])
    # print(map[startXY[0]][startXY[1]])
    if oldColor is None:
        oldColor = map[startXY[0]][startXY[1]]
    # first change
    map[startXY[0]][startXY[1]] = newColor
    # check the right
    if map[startXY[0]][startXY[1]+1] == oldColor:
        map[startXY[0]][startXY[1]+1] = newColor
    # check the left
    if map[startXY[0]][startXY[1]-1] == oldColor:
        map[startXY[0]][startXY[1]-1] = newColor
    # up and down need to be done with other call of the function with going there
    #  idea of starting from the top going down
    # # check the up
    # if map[startXY[0]-1][startXY[1]] == oldColor:
    #     map[startXY[0]-1][startXY[1]] = newColor
    # # check the down
    # if map[startXY[0]+1][startXY[1]] == oldColor:
    #     map[startXY[0]+1][startXY[1]] = newColor
    # if startXY[1] + 1 < len(map):
    #     floodFill(map,[startXY[0], startXY[1] + 1],newColor, oldColor)
    print([startXY[0], startXY[1] + 1])
    # elif startXY[0][1] 
    # while index < len(map[0]):
    #     if map[startXY[0]][startXY[1]+index] == oldColor:
    #         map[startXY[0]][startXY[1]+index] = newColor
    #         index +=1
    #     else:
    #         break
    # # check the left
    # index = 1
    # while startXY[1]-index > 0:
    #     if map[startXY[0]][startXY[1]-index] == oldColor:
    #         map[startXY[0]][startXY[1]-index] = newColor
    #         index +=1
    #     else:
    #         break
    # # check the front
    # index = 1
    # while index < len(map):
    #     if map[startXY[0]-index][startXY[1]] == oldColor:
    #         map[startXY[0]-index][startXY[1]] = newColor
    #         index +=1
    #     else:
    #         break



floodFill(canvas2D,[2,2],1)
print(canvas2D)
# canvas2D_result = [
#     [3,2,1,4,3],
#     [2,1,1,4,0],
#     [7,1,1,5,3],
#     [6,5,1,4,1],
#     [1,2,1,1,1]
# ]