
import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid'







function App() {
  function Addtodo(e) {
    const task = e.target.elements
    const div1 = document.querySelector('#div')
    let elemt = document.createElement('div')
    let check = document.createElement('input')
    let tex = document.createElement('a')
    check.id = 'checkbox'
    check.type = 'checkbox'
    elemt.appendChild(check)

    // check.style.float = 'right'
    tex.innerText = task.input.value
    elemt.appendChild(tex)

    

    div1.appendChild(elemt)
    task.input.value = ''
    e.preventDefault()
    console.log(uuidv4())
    let key = uuidv4()
    localStorage.setItem(key, div1)



  }

  function Clearchecked() {
    const state = document.querySelectorAll('#checkbox')

    for (var i = 0; i < state.length; i++) {
      if (state[i].checked === true){
        state[i].parentElement.remove()
      }

    }
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
      <form 
        onSubmit={Addtodo}
        style={{
          alignContent: 'center',
          justifyContent: 'center'
        }}>

        <input type='text' id='input' />

        <button type='submit' > send </button>
      </form>


      <ul id='div' style={{ overflowY: 'hidden'}}>
      </ul>
      
      <button className='btn' onClick={Clearchecked} > Clearchecked </button>
      

    </div>
  );
}


export default App;


