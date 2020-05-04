// js es6 class 关键字 面向对象
const UUID = require('uuid');  //引入第三方库
class Wallet{
    // 属性和方法组成
    constructor(){  //构造函数里声明
        this._id = UUID.v1().replace(/-/g, ""); // 命名规则约定 _变量 私有
        // 创建时间   不能修改
        this._createTime = + new Date(); // + 类型转换
        // 余额  怎么设计?
        this._balance = 0; // 余额 设计成私有的属性  规则  安全
        this._updateTime = new Date();
        // console.log(this.id);
    // 唯一id  ，autoincremnet Node, 绝对不会重复
    }
    // getUpdateTime(){
    //     return this._updateTime;
    // }
    getId(){
        return this._id;
    }
    setId(){
        throw new Error('私有属性_id 不可以修改');
    }
    getCreateTime(){
        return this._createTime;
    }
    getBalance(){
        return this._balance;
    }
    // 重置？
    // setBalance(){

    // }
    increaseBalance(increasedAmount){ //
        console.log('多了' + increasedAmount + '元');
        console.log(this._updateTime);
        this._balance += increasedAmount;
    }
    decreaseBalance(decreasedAmount){
        console.log('减了' + decreasedAmount + '元');
        console.log(this._updateTime);
        this._balance -= decreasedAmount;
    }
}

const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance().toFixed(2));
// zzwWallet._id = '123';  // id 属性只读  但不能修改
// console.log(zzwWallet._id);  // id 是 zzwWallet 的 public属性