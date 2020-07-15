import React, { useCallback } from 'react';
// import logo from './logo.svg';
import Header from './components/header/Header';
import { connect } from 'react-redux';
import './App.css';
import Journey from './components/journey/Journey'


function App(props) {
  const { 
    from,
    to
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div>
      <div className="header-wrapper"> 
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className="from">
        <Journey from={from} to={to} />
      </form>
    </div>
  );
}

export default connect(function mapStateToProps(state) {
  // 状态 的读操作
  return state
}, )(App);
