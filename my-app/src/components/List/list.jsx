import React from 'react'

export default function list() {
   const numbers = [1, 2, 3, 4, 5];
   // return (
      // <ul>
      //    {numbers.map((item) => (
      //       <li key={item.toString()}>{item}</li>
      //    ))}
      // </ul>
   // )

   const todos = [
      { id: 1, text: 'Drink Water' },
      { id: 2, text: 'wash car' },
      { id: 3, text: 'Study' },
      { id: 4, text: 'Go to bed' },
   ];


   const Item = (props) => {
      return <li>
         {props.id}
         {props.text}
         </li>;
   }

   const todoList = todos.map((todo) => <Item key={todo.id} {...todo}/>);

   return <>{todoList}</>
}

//map => 배열의 개별요소를 순회
//default key => 안주면 react는 index를 쓴다(warning은 일어나지만 동작을 하긴한다.)
//고유성 => 형제 사이에서만 고유하면 된다.
//key props => key는 props로 넘어가지 않음.

// https://ko.reactjs.org/docs/lists-and-keys.html
