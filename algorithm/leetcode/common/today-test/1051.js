var heightChecker = function(heights) {
    let num = 0;
    let arr = heights.slice(0);
    function sortNumber(a,b)
    {
        return a - b
    }
    heights = heights.sort(sortNumber)
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != arr[i]) {
            num++
        }
    }
    return num
};