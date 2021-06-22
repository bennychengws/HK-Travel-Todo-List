import React, { useState } from 'react'
import moduleCss from '../styles/Inputbox.module.css'

const Inputbox = () => {

  const [task, setTask] = useState(" ");
  const [taskArray, setTaskArray] = useState([]);
  const [count, setCount] = useState(0);

  const handleInput = event => {
    setTask(event.target.value);
  };

  const addToList = () => {
    console.log(task);
    setCount(count + 1)
    setTaskArray(oldArray => [...oldArray, {id: count, value: task}]);
  }

  const logValue = () => {

    console.log(taskArray)

  };

  const taskDone = (item) => {
    console.log(item.id, item.value);

  }

  const deleteTask = (id) => {
    console.log(id)
    setTaskArray(taskArray.filter((item)=> item.id !== id))
  }


  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.addToDo}>Add Todo</div>
      <form>
        <input type="text" onChange={handleInput} placeholder="   Add new todo" className={moduleCss.box}></input><br />
      </form>
      <button type="button" onClick={addToList}
        className="my-3 px-3 py-1 text-xs font-medium leading-6 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
      <button type="button" onClick={logValue}>logValue</button>
      <ul>
        {taskArray.map((item) => (
          <div className={moduleCss.boxContainer}>
            <li key={item.id} className={moduleCss.taskItem}>{item.value}</li>
            <button type="button" onClick={() => taskDone(item)} className="px-4 py-2 mb-4 text-sm font-medium rounded-sm block border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-900">Done</button>
            <button type="button" onClick={() => deleteTask(item.id)} className="px-4 py-2 mb-4 text-sm font-medium rounded-sm block border-b border-indigo-300 bg-red-200 hover:bg-red-300 text-red-900">Delete</button>
          </div>))}
      </ul>
    </div>
  )
}

export default Inputbox
