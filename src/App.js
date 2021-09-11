
import React, { useState, useEffect } from 'react';
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
    const divparent = document.querySelector('.parentdiv')
    const div2 = document.createElement('div')
    
    let elemt = document.createElement('div')
    elemt.className = 'newdiv'
    let check = document.createElement('input')
    let tex = document.createElement('a')
    check.id = 'checkbox'
    check.type = 'checkbox'
    let check1 = document.createElement('input')
    check1.id = 'removebox'
    check1.type = 'checkbox'
    check1.addEventListener('change', () => {
      if (check1.checked === true){
        var check2 = check1.parentElement
        check2.style.backgroundColor = 'green'
        check2.style.textEmphasisColor = 'white'
        check1.parentElement.remove()
        div2.appendChild(check2)

      } 
    })
    let icon = document.createElement('label')
    icon.className = 'icon check'
    check.appendChild(icon)
    
    elemt.appendChild(check)
    elemt.appendChild(check1)

    // check.style.float = 'right'
    tex.innerText = task.input.value
    elemt.appendChild(tex)


    div1.appendChild(elemt)
    // div2.style.backgroundColor = 'green'
    divparent.appendChild(div2)
    task.input.value = ''
    let key = uuidv4()
    // localStorage.setItem(key, div1.innerHTML)
    
    e.preventDefault()


  }




  function Clearchecked() {
    const state = document.querySelectorAll('#checkbox')

    for (var i = 0; i < state.length; i++) {
      if (state[i].checked === true){
        state[i].parentElement.remove()
      }

    }
  }
  
  
  // useEffect(() => {
  //   for (var i = 0; i < state.length; i++) {
  //     if (state[i].checked === true){
  //       state[i].parentElement.remove()
  //     }

  //   }
  // })

  

 

  return (
    <div className='parentdiv' style={{ 
      // backgroundColor: "white", 
      display: 'felx',
      width: '100%',
      overflowY: 'hidden'
      // height: '100%',
      // borderColor: 'lightblue',
      // borderStyle: 'solid'
      // alignContent: 'center',
      // justifyContent: 'center'
      }} >
      <header style={{border: '0%', margin: '0%'}}>

      </header>
      <div style={{
        textAlign: 'center',
        marginTop: '10%',
        fontSize: 'larger',
        fontFamily: 'fantasy'
      }}
      >⚛️ 🔥 💬 Your ToDo List:</div>

      <form 
        onSubmit={Addtodo}
        // style={{
        //   alignContent: 'center',
        //   justifyContent: 'center'
        // }}
        >

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


