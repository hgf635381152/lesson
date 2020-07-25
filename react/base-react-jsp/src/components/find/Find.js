import React from 'react';
import './Find.css'


function Find(){
  // window.addEventListener('scroll', function () {
  //   let t = document.querySelector('body').scrollTop;   // 目前监听的是整个body的滚动条距离
  //   if (t > 55) {
  //     document.querySelector(".find-bg").classList.add('box-active')
  //   } else {
  //     document.querySelector('.find-bg').classList.remove('box-active')
  //   }
  // })
  return ( 
    <div>
      <div className="find-bg">
        <div className="find-bg-top">
          <i className="iconfont iconfont1">&#xe654;</i>
          <span className="find-bg-top-title">发现</span>
          <i className="iconfont iconfont2">&#xe636;</i>
          <i className="iconfont iconfont3">&#xe606;</i>
        </div>
        <div className="find-bg-bar">
          <div className="find-bg-bar-content">
            <span>关注</span>
            <span>直播</span>
            <span>特仑苏</span>
            <span>5G</span>
            <span>视频</span>
          </div>
        </div>
      </div>
      <div className="find-list">
        {

        }
      </div>
    </div>
  );
}

export default Find;