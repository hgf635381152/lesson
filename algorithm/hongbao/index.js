//发红包的功能
function hongbao(total,num)
{
    let arr=[];//声明数组
    let restAmount=total;
    let restNum=num;
    for(let i =0;i<num-1;i++)
    {
        let amount = (Math.random() * ((restAmount-0.01*(restNum-1)) - 0.01) + 0.01).toFixed(2);
        arr.push(amount)
        restAmount -= amount;
        restNum -= 1;
    }
    restAmount=restAmount.toFixed(2);
    arr.push(restAmount)
    return arr;
}
console.log(hongbao(5,40));