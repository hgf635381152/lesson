// 假数据  使用真数据前使用 
import Mock from 'mockjs';

export default Mock.mock('/posts/', 'get', {
  success: true,
  title: 'a',
  content: '这是a的内容',
  'list|5-10': [{
    'title': '@title()',
    'email': '@email',
    'id': '@id',
    'key|+1': 1
  }]
})