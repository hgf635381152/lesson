import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [
        { uid: 123, title: 'jspa'},
        { uid: 456, title: 'jspb' },
        { uid: 789, title: 'jspc' }
      ]
    };
    this.props.history.replace("/home/")
  }
  render() {
    return (
      <div>
        <h2>JSP</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/'+item.uid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>  
    );
  }
}

export default index;