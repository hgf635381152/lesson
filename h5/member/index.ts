// console.log('hello member')

// 有什么问题?
// 1.不能动态更新
// 2.js  uuid  npm
// 3.数据不合法，数据不严谨  让不严谨的数据守规矩？
// 接口
interface MembersEntity{
  id:number;
  name:string;
  avater:String;
}

const members:MembersEntity[] = [
  {
    id:1314,
    name:'黄毅超',
    avater: "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361981880,3052617388&fm=111&gp=0.jpg"
  },
  {
    id:520,
    name:'徐剑豪',
    avater:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2491561979,272135239&fm=111&gp=0.jpg"
  },
  {
    id:10000,
    name:'罗钦太',
    avater:"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg"
  }
]
// console.log(members)
const tbody = document.querySelector('#member tbody');
// tbody.innerHTML = 
// 从json 数组 变成了 html 数组
tbody.innerHTML = members.map((member) => {
  return`
    <tr>
      <td>${member.id}</td>
      <td>${member.name}</td>
      <td><img src="${member.avater}"></td>
    </tr>
  `
}).join("")