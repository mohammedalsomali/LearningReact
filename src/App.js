
import React from 'react';
import ReactDOM from 'react-dom';






function App() {
  function Addtodo(e) {
    const task = e.target.elements
    const div1 = document.querySelector('#div')
    let elemt = document.createElement('div')
    let check = document.createElement('input')
    check.type = 'checkbox'
    elemt.innerHTML = task.input.value
    elemt.appendChild(check)

    div1.appendChild(elemt)
    task.input.value = ''
    e.preventDefault()


  }


  return (
    <div style={{ backgroundColor: "red", height: '500px', width: '350px'}} >
      <header>
        <h1>⚛️🔥💬</h1>

      </header>

      <ul id='div' style={{ width: '88.5%', height: '70%', backgroundColor: 'darkcyan',overflowY: 'scroll', scrollbar: 'None' }}>
      </ul>
      
      <form onSubmit={Addtodo}>

        <input type='text' id='input' />

        <button type='submit' > send </button>
      </form>

    </div>
  );
}


export default App;


