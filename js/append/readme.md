- DOM document 文档就是网页， js 内存中  文档对象模型
  js -> html 优化
  DOM  JS 数据结构tree  appendChild  组成一棵树
  ul>li>textnode
  document.createElement('tag')   标签节点
  document.createTextNode('abab')  文本节点

  nodeType

  前端js，html，css， js是超级   js可以操控html，css ，这些 API DOM API

  高级：fragment 垫片

- js this指向  你不知道的JavaScript this
  this 动态决定，在每个函数里都有 this 是个指针

  this 指向 谁 由调用方式决定
  1.作为对象的方法调用，this 指向对象本身
  2.作为事件函数，this 指向事件发生的元素
    bind 可以强行去绑定函数内部的this 指向谁
    call 立即执行
- 封装 class  复用 
  constructor  申明属性 this.state
  render()  渲染到页面上
  changeLikeText()

  createDOMFromString 要写到外面？
  createDOMFromString  不该属于LikeButton类  是独立的
  util 方法