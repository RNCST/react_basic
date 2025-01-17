import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date()};
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timerID = setInterval( () => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerID);
  }

  tick(){
    console.log('tick');
    this.setState({date : new Date()});
  }
  handleClick = () => {
    alert(this.state.date);
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, LifeCycle</h1>
        <h2>{this.state.date.toLocaleTimeString}</h2>
      </div>
    )
  }
}


//https://ko.reactjs.org/docs/react-component.html

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

//constructor => state 초기화 및 메서드 바인딩
//componentDidMount => Dom 노드 초기화 및 데이터 fetch
//componentWillUnmount => 타이머 제거 및 요청 취소 및 구독 해제 
//Funtional Component => hook으로 대부분 구현 가능. 