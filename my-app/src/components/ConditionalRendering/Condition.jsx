import React from 'react'



function UserGreeting(props) {
   return <h1>{props.name && props.name + ', '} 
   Welcome {props.count ? `It's ${props.count} times` : null }</h1>
}

function GuestGreeting(props) {
   return <h1>Please sign up</h1>
}
function Greeting(props) {

   return props.isLoggedIn ?
      <UserGreeting name="OSH" count={0} />
      : <GuestGreeting />

}
export default function Condition() {
   const isLoggedIn = true;

   return (
      <div>
         <Greeting isLoggedIn={isLoggedIn} />
      </div>
   )
}

// && condition && A.. condition에 falsy한 값이 들어오는 경우 condition이 그려질수 있다.
// falsy를 boolean으로 감싸서 확실한 값으로 설정하던가 삼항연산자로 분기를 확실히 설정해준다. 
// 