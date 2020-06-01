主题： react beer  应用开发思路整理
beer  搜索 -> 列表 -> 点进去    创建路由

3个 路由 设计  beer 三个路由
/
搜索跟列表显示合二为一   /search/:searchTerm  /search/all       /search/8    params
详情页     /beer/:beerId

语义化设计URL   url要表达资源的意义

1. 把应用架构好， 路由