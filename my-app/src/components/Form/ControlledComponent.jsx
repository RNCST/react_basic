import React, { useState } from 'react'

export default function ControlledComponent() {
   const [name, setName] = useState('');
   const [essay, setEssay] = useState("Please write an essay about your favorite DOM element")
   const [flavor, setFlavor] = useState("coconut")

   function handleChange(event) {
      const type = event.target.type;
      if (type === 'text'){
         setName(event.target.value)
      }if (name === 'essay') {
         setEssay(event.target.value)
      }if (name === 'flavor') {
         setFlavor(event.target.value)
      }
   }
   function handleSubmit(event) {
      alert(`value : ${name}, essay; ${essay}, flavor: ${flavor}`);
      event.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Name:
            <input name="name" type="text" value={name} onChange={handleChange} />
         </label>
         <br />
         <label>
            Essay:
            <textarea name="essay" value={essay} onChange={handleChange} />
         </label>
         <br />
         <br />
         <label>
            Pick your favorite flavor:
            <select name="flavor" value={flavor} onChange={handleChange}>
               <option value="grapefruit">Grapefruit</option>
               <option value="lime">Lime</option>
               <option value="coconut">Coconut</option>
               <option value="mango">Mango</option>
            </select>
         </label>
         <input type="submit" value="Submit" />
      </form>
   )

}




// Form

// Controlled Component =< input의 value를 state로 관리
// 다중입력 => event.target.name
// => Uncontrolled Component => form element 자체의 내부상태 활용
// defaultValue, ref => 기본값 /value확인
// https://ko.reactjs.org/docs/forms.html