// 假数据  使用真数据前使用 
import Mock from 'mockjs';

export default Mock.mock('/lessons/', 'get', {
  success: true,
  'list|5-10': [{
    'title': '@title()',
    'image': "@image('200×100', '#FFC0CB', 'Hello')",
    // 'id': '@id',
    'key|+1': 1,
    'number1|50-100': 1,
    'number2|0-50': 1,
    "stateA|1": ['未学完', '已学完'],
    "stateB|1": ['专栏', '视频课', '微课', '每日一课', '其他']
  }]
})