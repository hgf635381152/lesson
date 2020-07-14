import React, { useEffect, useState, useMemo, useCallback } from 'react'

let arr = [1, 2]
let set = new Set() // 无重复数据集
set.add(1)
set.add(2)
console.log(set)
let set1 = new Set([1,1,1,1,1]);
console.log([...set1])

function Demo() {
  const [ inputVal, setVal ] = useState('稻香')
  const [ list, setList ] = useState([])

  // 缓存的时候检查依赖  只有依赖没有变化才会使用上次的值
  const val = useMemo(() => arr, [])
  set.add(val);
  console.log(set.size)
  const handleChange = useCallback((event) => {
    setVal(event.target.value);
  }, [])
  useEffect(() => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + inputVal)
    .then(res => res.json())
    .then((res) => {
      setList(res.result.songs)
    })
    return () => {
      // 卸载
    }
  }, [inputVal])
  // 依赖  react 检查 依赖里面有没有数据发生变化， 没变化就不会重新调用
  return (
    <div>
      { list.length }
      <input type="text" value={inputVal} onChange={handleChange}></input>
    </div>
  )
}

export default Demo;
