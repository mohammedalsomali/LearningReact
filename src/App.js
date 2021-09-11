
import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid'







function App() {
  function Addtodo(e) {
    const task = e.target.elements
    if (task.input.value === '') {
      e.preventDefault()
      return
    }

    const div1 = document.querySelector('#div')
    let elemt = document.createElement('div')
    let check = document.createElement('button')
    let tex = document.createElement('a')
    // check.id = 'checkbox'
    // check.type = 'checkbox'
    let icon = document.createElement('label')
    icon.className = 'icon check'
    check.appendChild(icon)
    elemt.appendChild(check)

    // check.style.float = 'right'
    tex.innerText = task.input.value
    elemt.appendChild(tex)



    div1.appendChild(elemt)
    task.input.value = ''
    console.log(uuidv4())
    let key = uuidv4()
    localStorage.setItem(key, div1.innerHTML)

    e.preventDefault()


  }


  function storage(){
    
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
      // backgroundColor: "white", 
      display: 'felx',
      width: '100%',
      // height: '100%',
      // borderColor: 'lightblue',
      // borderStyle: 'solid'
      // alignContent: 'center',
      // justifyContent: 'center'
      }} >
      <header style={{border: '0%', margin: '0%'}}>

      </header>
      <div style={{ fontSize: 'larger', fontFamily: 'fantasy'}}>⚛️ 🔥 💬 Your ToDo List:</div>

      <form 
        onSubmit={Addtodo}
        style={{
          alignContent: 'center',
          justifyContent: 'center'
        }}>

        <input type='text' id='input' />

        <button type='submit' className='btnui' > send </button>
      </form>


      <div id='div' style={{ overflowY: 'hidden'}}>
      </div>
      
      <button className='btn' onClick={Clearchecked} >  Clearchecked </button>
      

    </div>
  );
}


export default App;


