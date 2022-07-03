import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [showHide, setShowHide] = useState(false);
  const handleTaskBarClick = () => {
    setShowHide(!showHide);
  };

  const showTasks = () => {};
  return (
    <div className="App">
      <Header handleTaskBarClick={handleTaskBarClick} showHide={showHide} />
      {showHide && <AddTask showTasks={showTasks} />}
      <Tasks />
    </div>
  );
}

export default App;
