var name = 'xiaoli';

function showName() {
  var name2 = 'lihu';
  console.log(name3);
  // add 函数也是一个变量  遵守作用域规则
  function add(){
    console.log('嵌套',name2);
  }
  add();
}
// if() {} else {}
{
  var name1 = 'lilei';
  name3 = 'lihua';
  {

  }
}
console.log(name1);
// console.log(name2);
showName();
