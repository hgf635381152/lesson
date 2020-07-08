import React, { Component } from 'react'

class DragAble1 extends Component {
  state = {
    left: 0, 
    top: 0
  }
  handleDown = (e) => {
    // var startX = e.clientX;
    // var startY = e.clientY;
    // this.startX = startX;
    // this.startY = startY;
    document.addEventListener('mousemove',this.handleMove)
    document.addEventListener('mouseup',this.handleUp)
  }
  handleMove = (e) => {
    // var newX = e.clientX;
    // var newY = e.clientY;
    // const diffX = newX - this.startX;
    // const diffY = newY - this.startY;
    this.setState({
      left: e.clientX,
      top: e.clientY
    })
  }
  handleUp = () => {
    document.removeEventListener('mousemove',this.handleMove)
    document.removeEventListener('mouseup', this.handleUp)
  }
  render() {
    const { left, top } = this.state;
    return (
      <h2
        style={{left, top}}
        className="dragable"
        onMouseDown={this.handleDown}
      >h2</h2>
    );
  }
}

class DragAble2 extends Component {
  render() {
    return (
      <p>爱国荣校</p>
    );
  }
}

function withDragAble(Com) {
  class WithDragAble extends Component {
    state = {
      left: 0,
      top: 0
    }
    handleDown = (e) => {
      // var startX = e.clientX;
      // var startY = e.clientY;
      // this.startX = startX;
      // this.startY = startY;
      document.addEventListener('mousemove', this.handleMove)
      document.addEventListener('mouseup', this.handleUp)
    }
    handleMove = (e) => {
      // var newX = e.clientX;
      // var newY = e.clientY;
      // const diffX = newX - this.startX;
      // const diffY = newY - this.startY;
      this.setState({
        left: e.clientX,
        top: e.clientY
      })
    }
    handleUp = () => {
      document.removeEventListener('mousemove', this.handleMove)
      document.removeEventListener('mouseup', this.handleUp)
    }
    render() {
      const { left, top } = this.state;
      return (
        <div 
          style={{left, top}} 
          className="dragable"
          onMouseDown={this.handleDown}>
          <Com />
        </div>
      )
    }
  }
  return WithDragAble
}

;
export const WithDragAble = withDragAble(DragAble2);
export default DragAble1;

// import React, { Component } from 'react';
// class Drag extends Component {
//   state = {
//     left: 0,
//     top: 0
//   }
//   handleDown = (e) => {
//     var startX = e.clientX;
//     var startY = e.clientY;
//     let obj = e.target.getBoundingClientRect();
//     // 重置起点
//     this.startX = startX - obj.x;   // obj.left
//     this.startY = startY - obj.y;
//     document.addEventListener('mousemove', this.handleMove);
//     document.addEventListener('mouseup', this.handleUp);
//   }
//   handleMove = (e) => {
//     var newX = e.clientX;
//     var newY = e.clientY;
//     const diffX = newX - this.startX;
//     const diffY = newY - this.startY;
//     this.setState({
//       left: diffX,
//       top: diffY
//     })
//   }
//   handleUp = () => {
//     document.removeEventListener('mousemove', this.handleMove);
//     document.removeEventListener('mouseup', this.handleUp);
//   }
//   render() {
//     const { left, top } = this.state;
//     return <h2
//       style={{ left, top }}
//       className="dragable"
//       onMouseDown={this.handleDown}
//     >h2</h2>
//   }
// }
// export default Drag;