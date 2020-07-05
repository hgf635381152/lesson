let tree = {
  val: 'F',
  left: {
    val: 'C',
    left: {
      val: 'A',
    },
    right: {
      val: 'D',
    },
  },
  right: {
    val: 'E'
  }
}
var preorderTraversal = function (root) {
  let arr = [];
  function helper(node) {
    if (node){
      let val = node.val;
      arr.push(val);
      helper(node.left);
      // 遇到了左子树  也要 root  left  right
      helper(node.right);
      // 遇到了右子树  也要 root  left  right
    }  
  }
  helper(root);
  return arr;
};
console.log(preorderTraversal(tree));