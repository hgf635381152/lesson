import React from 'react';
import { connect } from 'react-redux';


const TodoList = (props) => {
  let { inputValue, inputChange, addlist, list } = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={inputChange} />
        <button onClick={addlist}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    addlist() {
      let action = {
        type: 'add_item'
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);
