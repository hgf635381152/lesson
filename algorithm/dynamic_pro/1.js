//  将一个字符改变成另一个字符串，莱文斯坦距离多少？
var a = "mitcmu";
var b = "mtacnu";
var n = 6,m = 6; //长度  有可能不同
var minDist = Infinity//  最大值,  js 无穷大
function lwstBT(i, j, edist){
    if (i == n || j == m) { // 不一定同时到达

        if (i < n) edist += (n - i); // 
        if (j < m) edist += (m - j);
        if (edist < minDist) minDist = edist;
        return minDist;
    } 
    if(a[i] == b[i]){
        lwstBT(i+1,j+1,edist)
    }
    else{
        lwstBT(i + 1, j, edist + 1); //删除a[i] 或者 b[j]前添加一个字符
        lwstBT(i, j + 1, edist + 1); //删除b[j] 或者 a[i]前添加一个字符
        lwstBT(i + 1, j + 1, edist + 1); //替换相同字符
    }
}