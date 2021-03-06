import React, { useState, useEffect } from 'react'


function Supermarket(props) {
  const [list, setlist] = useState([]);
  useEffect(() => {
    fetch('http://localhost/sort/supermarket')
      .then(data => data.json())
      .then(data => {
        setlist(data.supermarket)
        // console.log(data)
      })
  }, [])
  return (
    <div className="sort-goods-list">
    {
      list.map((Item, Index) => {
      return (
        <ul key={Index}>
          <h2 >{Item.title}</h2>
          <ul >
          {
            Item.goods.map((item, index) => {
              return (
                <li  key={index}>
                  <img  src={item.src} width={75} height={75} alt="" />
                  <span>{item.name}</span>
                </li>
              )
            })
          }
          </ul>
        </ul>
      )
      })
    }
    </div>
  );
}

export default Supermarket;