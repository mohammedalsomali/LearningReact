
import React from 'react';
import ReactDOM from 'react-dom';






function App() {
  function Addtodo(e) {
    const task = e.target.elements
    const div1 = document.querySelector('#div')
    let elemt = document.createElement('div')
    let check = document.createElement('input')
    // check.id = 'checkbox'
    check.type = 'checkbox'
    check.props.id = 'check'
    elemt.innerHTML = task.input.value
    elemt.appendChild(check)

    div1.appendChild(elemt)
    task.input.value = ''
    e.preventDefault()


  }


  return (
    <div style={{ 
      backgroundColor: "lightblue", 
      display: 'felx',
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center'
      }} >
      <header>
        <h1>⚛️🔥💬 Your ToDoList:</h1>

      </header>

      <ul id='div' style={{ overflowY: 'hidden'}}>
      </ul>
      
      <form onSubmit={Addtodo}>

        <input type='text' id='input' />

        <button type='submit' > send </button>
      </form>

    </div>
  );
}


export default App;


