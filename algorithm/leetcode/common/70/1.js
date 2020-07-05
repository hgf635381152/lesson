var climbStairs = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    // 避免重复计算  节约内存  变量可以申请一个空间给不同的值使用
    let ret = 0,
        pre = 2,
        prepre = 1;

    for (let i = 3; i <= n; i++) {
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }

    return ret;
};