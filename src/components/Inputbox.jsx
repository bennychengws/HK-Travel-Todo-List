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
    setTaskArray(oldArray => [...oldArray, { id: count, value: task, DoneState: false }]);
    setTask("")
  }

  const logValue = () => {
    console.log(taskArray)
  };


  const taskDone = (id) => {
    const newArray = taskArray.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          DoneState: !item.DoneState,
        };
        return updatedItem;
      }

      return item;
    });

    setTaskArray(newArray);
  }

  const deleteTask = (id) => {
    console.log(id)
    setTaskArray(taskArray.filter((item) => item.id !== id))
  }

  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.addToDo}>Add Todo</div>
      <form>
        <input type="text" onChange={handleInput} placeholder="   Add new todo" value={task} className={moduleCss.box}></input><br />
      </form>
      <button type="button" onClick={addToList}
        className="my-3 px-3 py-1 text-xs font-medium leading-6 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
      {/* <button type="button" onClick={logValue}>logValue</button> */}

      <ul>
        {taskArray.map((item) => (
          <div className={moduleCss.boxContainer}>
            <li key={item.id} className={moduleCss.taskItem} style={{ textDecoration: item.DoneState ? 'line-through' : 'none', }} >{item.value}</li>
            <div className={moduleCss.buttonContainer}>
              <label className="my-0.5 flex justify-start items-start">
                <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-0.5 focus-within:border-blue-500">
                  <input type="checkbox" onClick={() => taskDone(item.id)} className="opacity-0 absolute"></input>
                  <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                </div>
                <div className="select-none text-green-600">Done</div>
              </label>
              <label className="my-0.5 flex justify-start items-start">
                <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-0.5 focus-within:border-blue-500">
                  <input type="checkbox" onClick={() => deleteTask(item.id)} className="opacity-0 absolute"></input>
                  <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                </div>
                <div className="select-none text-red-400">Delete</div>
              </label>
              {/* <button type="button" onClick={() => taskDone(item.id)} className="mx-0.5 px-1.5 py-1 text-sm font-medium rounded-sm block border-b border-indigo-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-900">Done</button>
              <button type="button" onClick={() => deleteTask(item.id)} className="mx-0.5 px-1.5 py-1 text-sm font-medium rounded-sm block border-b border-indigo-300 bg-red-200 hover:bg-red-300 text-red-900">Delete</button> */}
            </div>
          </div>))}
      </ul>
    </div>
  )
}

export default Inputbox
