//暴力解法
// var twoSum = function(nums,target){
//     let arr = []; //坐标放进去
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] ==target){
//                 arr = [i,j];
//                 return arr;
//             }
//         }
//     }
// }
const twoSum = function(nums,target){
    let map = {}; //对象字面量
    nums.forEach(function(e,i){
        //console.log(e,i);
        map[e] = i;
    })
    //console.log(map);
    for (let i = 0;i < nums.length; i++){
        let j = map[target - nums[i]];
        if(j && j !== i){
            return [i,j];
        }
    }
};