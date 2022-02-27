//추출
// https://codepen.io/gaearon/pen/VKQwEo?editors=1010

import React from 'react'

function formatDate(date) {
   return date.toLocaleDateString();
}

const comment = {
   date: new Date(),
   text: 'I hope you enjoy learning React!',
   author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
   }
};

function Avartar(props) {
   return (
      <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
      />
   )
}

function UserInfo(props) {
   return (
      <div className="UserInfo">
         <Avartar user={props.user} />
         <div className="userInfo-name">{props.user.name}</div>
      </div>
   )
}


function Comment(props) {
   return (
      <div className="Comment">
         {/* <Avartar user={props.author} /> */}
         <UserInfo user={props.author} />
         <div className="Comment-text">
            {props.text}
         </div>
         <div className="Comment-date">
            {formatDate(props.date)}
         </div>
      </div>
   )
}

export default function extraction() {
   return (
      <Comment
         date={comment.date}
         text={comment.text}
         author={comment.author} />
   )
}
