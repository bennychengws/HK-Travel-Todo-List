import React, { useState } from 'react'
import moduleCss from '../styles/Inputbox.module.css'




const Inputbox = () => {
  // const [task, setTask] = useState(" ");
  // const [taskArray, setTaskArray] = useState([]);

  // const handleInput = (event) => {
  //     setTask(event.target.value);
  // };

  // const AddToList = (task) => {
  //     setTaskArray((prevTasks) => [...prevTasks, task]);
  //     console.log(taskArray)
  // };

  const [task, setTask] = useState(" ");
  const [taskArray, setTaskArray] = useState([]);

  const handleInput = event => {
    setTask(event.target.value);
  };

  const AddToList = () => {
    setTaskArray(prevItems => [...prevItems, task]);
    console.log(taskArray);
  }

  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.addToDo}>Add Todo</div>
      <form>
        <input type="text" onChange={handleInput} placeholder=" Add new todo" className={moduleCss.box}></input><br />
        {/* <button onClick={logValue}>Log value</button> */}
      </form>
      <button type="button" onClick={AddToList}
        className="px-4 py-1 text-xs font-medium leading-6 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>

    </div>
  )
}

export default Inputbox
