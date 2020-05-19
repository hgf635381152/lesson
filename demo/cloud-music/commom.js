window.onload = function(){
  const tabLinks = document.querySelectorAll('.tabber a');
  tabLinks.forEach(function(link){
    link.addEventListener('click',function(){
      event.preventDefault();
      document.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    },false)
  })

  // 先拿到 swiper 数据
  // bannerList 数据
  // 真的数据
  // this.XMLHttpRequest 太难了 现代版的fetch
  fetch('http://localhost:3000/banner')
    .then(data => data.json())
    .then(data => {
      console.log(data);
    })
}