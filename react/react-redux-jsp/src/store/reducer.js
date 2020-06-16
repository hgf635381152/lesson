const defalutState = {
  inputValue: 'Write Something',
  list: [
    '早八点开晨会',
    '早九点沟通',
    '早十点工作'
  ]
}

export default (state = defalutState, action) => {

  console.log(state, action)
  // Reducer里只能接受state, 不能改变state
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}