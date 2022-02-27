// https://ko.reactjs.org/docs/components-and-props.html

import React from 'react'
//rfc snippet

function Welcome(props) {
   return <h1>Hello, {props.name}</h1>
}

export default function composition() {
   return (
      <div>
         <Welcome name="name1"></Welcome>
         <Welcome name="name2"></Welcome>
         <Welcome name="name3"></Welcome>
         <Welcome name="name4"></Welcome>
      </div>
   )
}


// props => Component에 전달되는 단일 객체
//  순수함수처럼 동작되며 Props자체를 수정해서는안됨
// 컴포넌트 합성 => 여러 컴포넌트를 모아서 합성
// 컴포넌트 추출 => 여러곳에서 사용되거나 복잡한 경우 