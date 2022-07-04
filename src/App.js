import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [showHide, setShowHide] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [isRender, setIsRender] = useState(true);

  const getlist = () => {
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    getTasks && setTaskList(getTasks);
    console.log(getTasks);
  };

  useEffect(() => {
    getlist();
  }, [isRender]);

  const handleTaskBarClick = () => {
    setShowHide(!showHide);
  };

  const updateRender = () => {
    setIsRender(!isRender);
    console.log(isRender);
  };

  const showTasks = () => {
    setTaskList(JSON.parse(localStorage.getItem("tasks")) || []);
    console.log(taskList);
  };

  return (
    <div className="App">
      <Header handleTaskBarClick={handleTaskBarClick} showHide={showHide} />
      {showHide && <AddTask showTasks={showTasks} taskList={taskList} />}
      <Tasks taskList={taskList} updateRender={updateRender} />
    </div>
  );
}

export default App;
