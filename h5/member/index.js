// console.log('hello member')
var members = [
    {
        id: 1314,
        name: '黄毅超',
        avater: "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1361981880,3052617388&fm=111&gp=0.jpg"
    },
    {
        id: 520,
        name: '徐剑豪',
        avater: "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2491561979,272135239&fm=111&gp=0.jpg"
    },
    {
        id: 10000,
        name: '罗钦太',
        avater: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1305353222,2352820043&fm=26&gp=0.jpg"
    }
];
// console.log(members)
var tbody = document.querySelector('#member tbody');
// tbody.innerHTML = 
// 从json 数组 变成了 html 数组
tbody.innerHTML = members.map(function (member) {
    return "\n    <tr>\n      <td>" + member.id + "</td>\n      <td>" + member.name + "</td>\n      <td><img src=\"" + member.avater + "\"></td>\n    </tr>\n  ";
}).join("");
