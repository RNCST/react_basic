import React from 'react'

export default function Event() {
   const handleButtonClick = (e) => {
      console.dir(e);
      console.log("handleButtonClick");
   }
   const handleMouseLeave = (e) => {
      console.dir(e);
      console.log("handleButtonClick");
   }
   const handleClickCapture = () => {
      console.log("Capture");
   }
   
   const handleClickCapture2 = () => {
      console.log("Capture2");
   }
   const handleClickBubble= () => {
      console.log("Bubble");
   }

   return (
      <div onClickCapture={handleClickCapture}>
         <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
            <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
         </div>
      </div>
   )
}

// 가장 상위 부모 => 그다음 부모 = >자식 = >버블링
// https://ko.reactjs.org/docs/events.html
// 보통의 이벤트는 버블링단계에 이행이되는데 Capture를 덧붙여서 캡쳐단계에서 수행되게 할수도있다.

// 합성이벤트 => 인터페이스는 같지만 직접 대응되지 않음. 
// Bubble(자식으로부터 부모로 올라가는것) / Capture(부모가 자식이 언제 이벤트가있는지 캐치하는것)

// return false => react에서는 제공하지 않는다.. => e.preventDefault() 적용해야함.