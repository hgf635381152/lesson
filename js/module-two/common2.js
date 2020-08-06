const { done, obj } = require('./comm1')
console.log(done)
console.log(obj)
setTimeout(() => {
  console.log(done)
  console.log(obj)
}, 5000)