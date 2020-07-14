import React, { Component } from 'react'
import PlanetImage from './星球.png'
import Add from './加号.png'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Index from '../../App'
// import CreatePlanet from './CreatePlanet'

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: JSON.parse(localStorage.getItem('planet'))
    };
  }
  render() {
    // console.log(this.state.list)
    return (
      <div className="planetAll">
        {
          this.state.list.map((item, index) => {
            return (
              <div style={{ float: "left", width: 187.5, height: 220}} className="planet" key={index}>
                <div>
                  <img style={{width: 160}} src={PlanetImage} alt="" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <div className="author">{item.author}</div>                
                </div>
              </div>
            )
          })
        }
        <div style={{ float: "left", width: 175.5, height: 220 }} className="planet-ADD">
          <div className="planet-add" >
            <img style={{ width: 80 }} src={Add} alt="" />
            <div className="planet-title">创建星球</div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Planet;