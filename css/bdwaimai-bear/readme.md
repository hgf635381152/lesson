使盒子(view)，此盒子为最外层盒子，铺满整个浏览器页面的四种方法：
初始情况：
* {
    /* 不同的浏览器 对于我们html标签都会有不同 将margin padding 全部初始化为0 */
    margin: 0;
    padding: 0;
}
view结构：
    <div class="view">
        <div class="bear">bear</div>
        <div class="progress">progress</div>
    </div>
方法：
1.    
        html,body{
            width: 100%;
            height: 100%;
        }
        .view{
            width: 100%;
            height: 100%;
        }
        这种情况下view的宽和高100%是与body相统一的，但body本身就未占满整个页面，所以此时我们需要将html和body的宽高设置为100%
2.
        .view{
            width: 100%;
            height: 100%;
            position: absolute;
        }
        这种情况我们加了position: absolute属性，此时view的宽高相对于父级第一个设置了定位元素(加了position属性的元素)，但是此时没有，那就相对于视窗(即整个页面)
3.
        .view{
            top:0;
            left:0;
            right:0;
            bottom:0;
            position: absolute;
        }
        这种情况下view盒子宽高相对于视窗，我们把它设置离上下左右的边距距离皆为0，所以它将铺满整个页面
4.      
        .view{
            width: 100vw;
            height: 100vh;
        }
        这种情况使用了vw(宽),vh(高)两种自适应单位，会自动按比例适应页面，100vw，100vh即宽占满，高占满