import React, { Component } from 'react';
// import Search from './Search';
// import Planet from './Planet';
import './Center.css'
import PlanetImage from './星球.png'
import Add from './加号.png'


class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      list: JSON.parse(localStorage.getItem('planet'))
    };
  }
  handleChangeValue(event) {
    this.setState({
      inputvalue: event.target.value
    })
  }
  render() {
    return (
      <div className="center">
        <div className="center-search">
          <input style={{ width: 340, height: 30 }} type="text" placeholder="搜索用户、星球或内容" value={this.state.inputvalue} onChange={this.handleChangeValue.bind(this)} />
        </div>
        <div className="planetAll">
          {
            this.state.list.map((item, index) => {
              return (
                <div style={{ float: "left", width: 187.5, height: 220 }} className="planet" key={index}>
                  <div>
                    <img style={{ width: 160 }} src={PlanetImage} alt="" />
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
      </div>
    );
  }
}

export default Center;