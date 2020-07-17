## 去哪儿全栈项目
    一分为二的思想
        前后端分离
        UI与redux分离

        
    城市数据怎么做    mock.js 动态获取假数据 (多个城市名 )
    - cityData   初始值为null  因为数据需要请求
        action-type
    - action  setCityData
    - 是否显示   isCitySelectorVisible  false
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE

        isLoadingCityData
        ACTION_SET_IS_LOADING_CITY_DATA
    - 后端API设计流程
        1. mongodb/mysql  写真后端
            mockerAPI 解决了后端
        2. 模块化输出api配置
        3. require json Mocker.mock random
            配置
    - api -> action -> reducer -> connect 
    -> 组件

    - 数据请求都 放在action中
        异步的action中, dispatch多个action

    