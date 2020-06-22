import { CHANGE_INPUT, ADD_ITEM, DELETEITEM } from './actionTypes'

const defalutState = {
  inputValue: 'Write Something',
  list: [
    '早八点开晨会',
    '早九点沟通',
    '早十点工作'
  ]
}

export default (state = defalutState, action) => {
  // reducer 必须是 纯函数  返回值是由参数决定的
  console.log(state, action)
  // Reducer里只能接受state, 不能改变state
  if (action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETEITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}