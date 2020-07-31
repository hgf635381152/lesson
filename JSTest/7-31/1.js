const chapterTree = {
  name: '总章节',
  children: [
    { name: '章节一', children: [{ name: '第一节', children: [{ name: '第一小节' }, { name: '第二小节' }] }, { name: '第二节' }] },
    { name: '章节二', children: [{ name: '第三节' }, { name: '第四节' }] }]
};


function serialize(tree) {
  let arr = []
  function walk(node) {
    arr.push(node.name);
    if (node.children) {
      for (let child of node.children)
        walk(child)
    }
  }
  walk(tree)
  return arr
}
// 测试
const result = serialize(chapterTree);
console.log(result);
// ["总章节", "章节一", "第一节", "第一小节", "第二小节", "第二节", "章节二", "第三节", "第四节"]

