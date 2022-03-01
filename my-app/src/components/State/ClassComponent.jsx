//rcc react class component 

import React, { Component } from 'react';

class ClassComponent extends Component {
   constructor(props) {
      super(props);
      this.state = { date: new Date() };
   }
   //컴포넌트가 그려지자 마자
   componentDidMount() {
      this.timerID = setInterval(
         () => this.tick(),
         1000
      );
   }
   //컴포넌트가 사라지기 직전
   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         date: new Date()
      });
   }

   render() {
      return (
         <div>
            <h1>Hello, classComponent!</h1>
            <h2>time is {this.state.date.toLocaleTimeString()}.</h2>
         </div>
      );
   }
}

export default ClassComponent;