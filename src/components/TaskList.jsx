import React, {useState, useEffect} from "react";
import moduleCss from "../styles/TaskList.module.css";
import DeleteTask from './DeleteTask';
import moment from "moment";
import axios from "axios";
const TaskList = ({tasks}) => {
  const [taskArray, setTaskArray] = useState([]);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
  const [pendingNewArray, setPendingNewArray] = useState(null)
  const [weatherForecastData, setForecastWeatherData] = useState([])

  useEffect(() => {
    setTaskArray(tasks)
    // console.log(tasks)
  }, [tasks])

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
  };

  const deleteTask = (id) => {
    console.log(id);
    var dummyArray = [...taskArray]
    var newArray = dummyArray.filter((item) => item.id !== id)
    setPendingNewArray(newArray)
    setShowDeleteTaskModal(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"
        );
        setForecastWeatherData(res.data.weatherForecast)
        // console.log(res.data.weatherForecast)
      } catch (error) {
        alert("The Observatory API does not work properly")
      }
    } 
    fetchData();
  }, [tasks])

  const simpleWeatherForecast = (date) => {
    for (let i = 0; i < weatherForecastData.length; i++) {
      if (weatherForecastData[i].forecastDate === date) {
        return weatherForecastData[i].forecastWeather
      }
    }
    return null
  }

  return (
    <div>
      <ul>
        {taskArray.map((item) => (
          <div className={moduleCss.boxContainer}>
            <li
              key={item.id} className={moduleCss.taskItem} style={{textDecoration: item.DoneState ? "line-through" : "none",}}
            >
              <div className="font-bold">{item.activity}</div><div>{item.location}</div><div className="text-blue-400">{simpleWeatherForecast(moment(item.date).format('YYYYMMDD')) ? simpleWeatherForecast(moment(item.date).format('YYYYMMDD')) : <div className="text-yellow-500">No forecast data available now</div>}</div>
            </li>
            <div className={moduleCss.buttonContainer}>
              <div style={{textDecoration: item.DoneState ? "line-through" : "none",}}>{moment(item.date).format('Do MMM YYYY')}</div>
              <div>
              <button
                className="flex justify-start items-start w-16 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-3 py-1 ml-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => taskDone(item.id)}
              >
                Done
              </button>
              <button
                className="flex justify-start items-start w-16 mt-1 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-2 py-1 ml-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <DeleteTask onClose={() => setShowDeleteTaskModal(false)} show={showDeleteTaskModal} pendingNewArray={pendingNewArray}></DeleteTask>
    </div>
  );
};

export default TaskList;
