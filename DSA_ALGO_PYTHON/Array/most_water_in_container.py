def most_water_container(height:list) ->int: 
    first = 0
    last = len(height)-1
    area = 0
    while first < last:
        # we have to calculate the area of water depending upon the geometry formula
        #  area = height * width
        #  area = array[min]* (last-first)\

        #will keep the track of water level for max area
        area = max(area ,min(height[first],height[last])*(last- first))
        if height[first] < height[last] :
            first += 1
        else:
            last -= 1
    return area




