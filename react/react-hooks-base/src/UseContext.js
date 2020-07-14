import React, { createContext, useState, useEffect, useContext, useRef } from 'react'

const context = createContext({
  // theme: 'red'
})

function P() {
  let [ obj, setTheme ] = useState({ theme: 'red' })
  useEffect(() => {
    setTimeout(() => {
      setTheme({
        theme: 'blue'
      })
    }, 3000);
  }, [])
  return (
    <context.Provider value={obj}>
      <Child a="1" />
    </context.Provider>     
  )
}

function Child() {
  console.log('1111111111')
  return (
    <Son />
  )
}

function Son() {
  // console.log('2222222222')
  const ref = useRef();
  const value = useContext(context)
  useEffect(() => {
    console.log(ref.current)
  }, [])
  return (
    <div> 
      这是第三层级 
      <h2 
        style={{color: value.theme}}
        ref={ref}
      >
        h2
      </h2>
      {/* <context.Consumer>
      { 
        (value) => {
          return (
            <h2 style={{color:value.theme}}>h2</h2>
          )
        }
      }
      </context.Consumer> */}
    </div>
  )
}


export default P;

//  跨层级传递数据