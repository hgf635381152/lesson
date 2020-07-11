import React, { Component, Fragment } from 'react';
import { Tabs, Table } from 'antd';
import axios from 'axios';  // 数据与组件是分离的
import './mock/data';
import 'antd/dist/antd.css';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      LIST: [],
      LIST1: [],
      LIST2: [],
      i: 0,
      listlen: 0,
    };
  }

componentDidMount() {
    // 管理数据请求
    axios.get('/lessons/')
      .then((res) => {
        this.setState({
          list: res.data.list,
          LIST: res.data.list,
          LIST1: res.data.list,
          listlen: res.data.list.length
        })
        console.log(this.state.LIST)
        console.log(res.data.list)
      })
  }

  Callback(key) {
    // console.log(key)
    if (key == 1) {
      if (this.state.LIST2.length != this.state.LIST.length && this.state.i == 1){
        this.setState({
          list: this.state.LIST2,
          LIST1: this.state.LIST
        })
      }else{
        this.setState({
          list: this.state.LIST,
          LIST1: this.state.LIST
        })
      }
    }
    else if (key == 2) {
      if (this.state.LIST2.length != this.state.LIST.length && this.state.i == 1) {
        this.setState({
          list: this.state.LIST2.filter((item) => {
            return item.stateA === '未学完'
          }),
          LIST1: this.state.LIST.filter((item) => {
            return item.stateA === '未学完'
          })
        })
      }
      else {
        this.setState({
          list: this.state.LIST.filter((item) => {
            return item.stateA === '未学完'
          }),
          LIST1: this.state.LIST.filter((item) => {
            return item.stateA === '未学完'
          })
        })
      }
    }
    else {
      if (this.state.LIST2.length != this.state.LIST.length && this.state.i == 1) {
        this.setState({
          list: this.state.LIST2.filter((item) => {
            return item.stateA === '已学完'
          }),
          LIST1: this.state.LIST.filter((item) => {
            return item.stateA === '已学完'
          })
        })
      }else {
        this.setState({
          list: this.state.LIST.filter((item) => {
            return item.stateA === '已学完'
          }),
          LIST1: this.state.LIST.filter((item) => {
            return item.stateA === '已学完'
          })
        })
      }
    }
  }

  callback(key) {
    if (key == 1) {
      this.setState({
        list: this.state.LIST1,  
        LIST2: this.state.LIST1,
        i: 0     
      })
      // this.setState({
      //   LIST2: this.state.LIST1
      // })
      // console.log(this.state.LIST2)
    }
    else if (key == 2) {
      this.setState({
        list: this.state.LIST1.filter((item) => {
          return item.stateB === '专栏'
        }),
        LIST2: this.state.LIST1.filter((item) => {
          return item.stateB === '专栏'
        }),
        i: 1   
      })
      // this.setState({
      //   LIST2: this.state.list
      //   })  
      // console.log(this.state.LIST2)
    }
    else if (key == 3) {
      this.setState({
        list: this.state.LIST1.filter((item) => {
          return item.stateB === '视频课'
        }),
        LIST2: this.state.LIST1.filter((item) => {
          return item.stateB === '视频课'
        }),
        i: 1 
      })
      // this.setState({
      //   LIST2: this.state.list
      // })
      // console.log(this.state.LIST2)
    }
    else if (key == 4) {
      this.setState({
        list: this.state.LIST1.filter((item) => {
          return item.stateB === '微课'
        }),
        LIST2: this.state.LIST1.filter((item) => {
          return item.stateB === '微课'
        }),
        i: 1
      })
    }
    else if (key == 5) {
      this.setState({
        list: this.state.LIST1.filter((item) => {
          return item.stateB === '每日一课'
        }),
        LIST2: this.state.LIST1.filter((item) => {
          return item.stateB === '每日一课'
        }),
        i: 1
      })
    }
    else {
      this.setState({
        list: this.state.LIST1.filter((item) => {
          return item.stateB === '其他'
        }),
        LIST2: this.state.LIST1.filter((item) => {
          return item.stateB === '其他'
        }),
        i: 1
      })
    }
  }

  render() {
    const { TabPane } = Tabs;
    const columns = [
      // { title: '', dataIndex: 'image', key: 'image' },
      { title: '', dataIndex: 'title', key: 'title'},
      { title: '', dataIndex: 'stateB', key: 'stateB' },
      {
        title: '',
        dataIndex: '',
        key: 'x',
        render: () => <a>开始学习</a>,
      },
    ];

    const data = this.state.list

    return (
        <Fragment>
        <div>我的课程</div>
        <div >
          <Tabs onChange={this.Callback.bind(this)}>
            <TabPane tab={"全部 (" + this.state.listlen + ")"} key="1" >
            </TabPane>
            <TabPane tab="未学完" key="2" >
            </TabPane>
            <TabPane tab="已学完" key="3" >
            </TabPane>
          </Tabs>
        </div>        
        <div >
          <Tabs onChange={this.callback.bind(this)} type="card">
            <TabPane tab="所有形式" key="1">
            </TabPane>
            <TabPane tab="专栏" key="2">
            </TabPane>
            <TabPane tab="视频课" key="3">
            </TabPane>
            <TabPane tab="微课" key="4">
            </TabPane>
            <TabPane tab="每日一课" key="5">
            </TabPane>
            <TabPane tab="其他" key="6">
            </TabPane>
          </Tabs>
        </div>
        <div>
        {/* { 
        this.state.list.map((item, index) => {
            const number3 = item.number1 - item.number2;
            return (
              <li key={index}> {item.title} {item.number1} {item.number2} {number3} {item.stateB}</li>
            )
          })
        } */}
          <Table
            columns={columns}
            expandable={{
              // expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
              rowExpandable: record => record.name !== 'Not Expandable',
            }}
            dataSource={data}
          />
        </div>
      </Fragment >
    )
  }
}


export default Lesson;
