import React, { useState, useEffect } from 'react'
import moduleCss from '../styles/Inputbox.module.css'
import Calendar from 'react-calendar'
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import TaskList from './TaskList';

const Inputbox = () => {

  const [task, setTask] = useState("");
  const [location, setLocation] = useState("")
  const [taskArray, setTaskArray] = useState([]);
  const [dateState, setDateState] = useState(new Date())
  const [showCalendarModal, setCalendarModal] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined" && JSON.parse(localStorage.getItem("tasks")))
      setTaskArray(JSON.parse(localStorage.getItem("tasks")))
  }, [])

  const handleActivityInput = event => {
    setTask(event.target.value);
  };

  const handleLocationInput = event => {
    setLocation(event.target.value);
  };

  const addToList = () => {
    console.log(task);
    setTaskArray(oldArray => [...oldArray, { id: new Date(), activity: task, location: location, DoneState: false, date: dateState}]);
    setTask("")
    setLocation("");
    setDateState(new Date())
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskArray))
  }, [taskArray])
  

  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.addToDo}>Add Todo</div>
      <form className={moduleCss.inputForm}>
        <div className="flex flex-row items-center"><div className="mr-2">Activity:</div><input type="text" onChange={handleActivityInput} placeholder="   Add new activity" value={task} className={moduleCss.box}></input></div>
        <div className="flex flex-row items-center mt-3"><div className="mr-2">Location:</div><input type="text" onChange={handleLocationInput} placeholder="   Add new location" value={location} className={moduleCss.box}></input></div>
        <div className="flex flex-row items-center mt-3">
          <div className="mr-2">Date:</div><div>{dateState ? moment(dateState).format('Do MMM YYYY') : null}</div>
          <button
            className="bg-indigo-400 text-white active:bg-indigo-500 font-bold uppercase text-xs px-3 py-1 ml-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => setCalendarModal(true)}
          >
            Choose Date
          </button>
        </div>
        {showCalendarModal ? 
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex flex-col	items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <button className="flex self-end text-3xl" onClick={() => setCalendarModal(false)}>x</button>
            <Calendar  value={dateState} onChange={e => setDateState(e)} locale="en"/> 
          </div>  
          </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        : null}
      </form>
      <button type="button" onClick={addToList}
        className="mt-3 mb-7 px-3 py-1 font-bold text-sm font-medium leading-6 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
      <TaskList tasks={taskArray} />
    </div>
  )
}

export default Inputbox
