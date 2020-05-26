- 博客网站， 我们还欠缺那些技能
  React 做 UI  组件化思维
- 列表
- 详情页
- 评论
 node做后端   后台数据库   mysql  mongodb
 怎么向应用提供数据
- 爬取   cherrio
- MVC  Model-View-Controller  可以实现增删改查  但不想启用mysql 
- 简单服务的话, json文件作为资源, 代替数据库
使用json-server 来启动它  restful api 格式
/posts post

/posts/show/1  看某篇文章的URL
不能有动词   /posts/1   show的概念由谁表达
/ GET  动词
/posts  POST

JSON  是数据格式  
  设计一个URL
  汇款需求,从账户1向账户2汇款500元  如何设计?
  json-server 自己做
/accounts/:1/transfer/:520/to/:2
restful 动词 + url(动词)
/transaction   转账  POST
{from:1, to:2, amount:500.00}
Restful  是后端在设计URL 的国际规范

**做网站是为了暴露资源**