
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { v4 as uuidv4 } from 'uuid'







function App() {
  function Addtodo(e) {
    const task = e.target.elements
    if (task.input.value === '') {
      e.preventDefault()
      return
    }

    const div1 = document.querySelector('#div')
    const divchild1 = document.querySelector('.childdiv1')
    const divchild2 = document.querySelector('.childdiv2')
    const tex1 = document.querySelector('.child1')
    const tex2 = document.querySelector('.child2')


    
    const div2 = document.createElement('div')
    
    let elemt = document.createElement('div')
    elemt.className = 'newdiv'
    elemt.style.backgroundColor = 'black'
    let check = document.createElement('input')
    let tex = document.createElement('a')
    check.id = 'checkbox'
    check.type = 'checkbox'


    check.addEventListener('change', () => {
      if (check.checked === true){
        var check2 = check.parentElement
        check2.style.backgroundColor = 'red'
        check1.parentElement.remove()
        div2.appendChild(check2)
        divchild2.appendChild(div2)
        tex2.style.visibility = 'visible'
        


      } 
    })


    let check1 = document.createElement('input')
    check1.id = 'removebox'
    check1.type = 'checkbox'
    check1.addEventListener('change', () => {
      if (check1.checked === true){
        var check2 = check1.parentElement
        check2.style.backgroundColor = 'green'
        check1.parentElement.remove()
        div2.appendChild(check2)
        divchild1.appendChild(div2)
        tex1.style.visibility = 'visible'



      } 
    })
    let icon = document.createElement('label')
    icon.className = 'icon check'
    check.appendChild(icon)
    
    elemt.appendChild(check)
    elemt.appendChild(check1)

    tex.innerText = task.input.value
    elemt.appendChild(tex)


    div1.appendChild(elemt)
    
    task.input.value = ''
    
    
    e.preventDefault()


  }


  const paren = document.querySelector('.parentdiv')

  




  

  

 

  return (
    <div className='parentdiv' style={{ 
      display: 'felx',
      width: '100%',
      overflowY: 'hidden'
      
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
        onSubmit={Addtodo}>

        <input type='text' id='input' />

        <button type='submit' className='btnui' > <a>Add ToDo</a> </button>
      </form>


      <div id='div' style={{ overflowY: 'hidden'}}>
      </div>
      
      <div className='parent'>
        <div className='childdiv1'> <a className='child1' style={{color: 'green', visibility: 'hidden'}}> Compleated Tasks:</a>
        </div>
        <div className='childdiv2'> <a className='child2' style={{color: 'red', visibility: 'hidden'}}>   Deleated Tasks </a>
        </div>
      </div>

    </div>
  );
}


export default App;


