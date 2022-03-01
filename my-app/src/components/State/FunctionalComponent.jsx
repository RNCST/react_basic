import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
   const [date, setDate] = useState(new Date());


   const tick = () => {
      setDate(new Date());
   };

   //componentDidMount
   useEffect(() => { 
      const interval = setInterval(() => tick(), 1000)
      return () => {
         clearInterval(interval);
      }
   }, [])

   return (
      <div>
         <h1>Hello, functionalComponent!</h1>
         <h2>time is {date.toLocaleTimeString()}.</h2>
      </div>
   );
}

// Component 내의 State => 자신의 출력갑승ㄹ 변경
// class Component => State LifeCycle
// Functional component => Hook으로 관리, Hook이 나오기전엔 상태관리를 불가능.

// class Component 형태에서 state를 setState가 아닌 직접 수정을 하게되면 re-rendering이 되지 않아 update가 되지 않는다.

// State의 업데이트는 비동기적일 수 있다.
// https://ko.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous