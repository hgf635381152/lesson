// default export  默认导出
export default 1

// default import
import xx from './x.js'


// named export   命名导出
export const a = function() {}
const b = 2
export {
  b
}
// export default{
//   a: 1,
//   b: 2
// }

import { a, b } from '../js'  // 此处的大括号不是解构