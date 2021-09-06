import react from "react";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
    <ToDoList/>
    <input type="text" placeholder="add to your list"/>
    <button> Add to the list</button>
    <button>clear the list</button>
    </>
  )
}

export default App;
