import React, { useCallback, useMemo } from 'react';
// import logo from './logo.svg';
import Header from './components/header/Header';
import { connect } from 'react-redux';
import './App.css';
import Journey from './components/journey/Journey';
import { bindActionCreators } from 'redux';
import { exchangeFromTo } from './store/action'


function App(props) {
  const { 
    from,
    to,
    dispatch
  } = props;

  const onBack = useCallback(() => {   // 缓存函数
    window.history.back();
  }, []);

  const cbs  = useMemo(() => {     // 缓存值
    return bindActionCreators({
      exchangeFromTo
    }, dispatch)
  }, []);

  return (
    <div>
      <div className="header-wrapper"> 
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className="from">
        <Journey from={from} to={to} {...cbs} />
      </form>
    </div>
  );
}

export default connect(function mapStateToProps(state) {
  // 状态 的读操作
  return state
}, function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
})(App);
