var m = new Map(); // JSON {a: b}
m.set(1, "black");
// console.log(m.get(1));
// console.log(m.has(2));
m.set({x:1}, 3); // key 都能是对象
let i = 1;
m.forEach((item, key, mapObj) => {
    console.log(item, key, mapObj)
    i++;
})
console.log(i);