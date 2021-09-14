
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'







function App() {

  // const [setitem, setnewitem] = useState([
  //   {parent: document.getElementsByClassName('parentdiv')},
  //   {child2: document.getElementsByClassName('childdiv1')},
  //   {child2: document.getElementsByClassName('childdiv2')}
  // ])


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
        check1.checked = false

        var check2 = check.parentElement.parentElement
        check2.style.backgroundColor = 'red'
        check1.parentElement.parentElement.remove()
        div2.appendChild(check2)
        divchild2.appendChild(div2)
        tex2.style.visibility = 'visible'
        


      } 
    })


    let check1 = document.createElement('input')
    check1.id = 'removebox'
    check1.type = 'checkbox'
    check1.title = 'Delete'
    check1.addEventListener('change', () => {
      if (check1.checked === true){
        check.checked = false
        var check2 = check1.parentElement.parentElement
        check2.style.backgroundColor = 'green'
        check1.parentElement.parentElement.remove()
        div2.appendChild(check2)
        divchild1.appendChild(div2)
        tex1.style.visibility = 'visible'



      } 
    })

    let conD = document.createElement('i')
    let conC = document.createElement('i')
    conD.style.color = 'green'
    conC.style.color = 'red'
    conC.className = "fa fa-times-circle-o "
    conD.className = "fa fa-check-circle-o fa-x3"
    conD.style.marginRight= '5%'
    conD.style.fontSize = 'xx-large'
    conC.style.fontSize = 'xx-large'

    let iconD = document.createElement('label')

    iconD.appendChild(check1)
    iconD.appendChild(conD)
    iconD.className = 'removeIcon'

    let iconC = document.createElement('label')
    iconC.appendChild(check)
    iconC.appendChild(conC)
    iconC.className = 'completeIcon'
    
    
    elemt.appendChild(iconC)
    elemt.appendChild(iconD)

    tex.innerText = task.input.value
    elemt.appendChild(tex)


    div1.appendChild(elemt)
    
    
    task.input.value = ''
    
    
    e.preventDefault()


  }


  

  




  

  

 

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
        {/* {setitem.parent} */}
      
      <div className='parent'>
        <div className='childdiv1'> <a className='child1' style={{color: 'green', visibility: 'hidden'}}> Compleated Tasks:</a>
        {/* {setitem.child1} */}
        </div>
        <div className='childdiv2'> <a className='child2' style={{color: 'red', visibility: 'hidden'}}>   Deleated Tasks: </a>
        {/* {setitem.child2} */}
       
        </div>
      </div>

    </div>
  );
}


export default App;


