import { v4 as uuid } from "uuid";
import { useState } from "react";

const AddTask = ({ showTasks }) => {
  const [dayTime, setDayTime] = useState();
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  // const unique_id = uuid();
  // console.log(unique_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !dayTime) {
      alert("Please enter your task");
    } else {
      setTask(
        tasks.push({
          id: uuid(),
          isDone: false,
          task: task,
          dayTime: dayTime,
        })
      );

      //   //?Yeni olsuturulan todo'yu diziye sakla
      //   todos.push(taskObject);

      //?todos dizisinin son halini localStorage'e sakla
      localStorage.setItem("tasks", JSON.stringify(tasks));
      console.log(tasks);
      setTask("");
      setDayTime("");
      showTasks();
      //   createListElement(todoObject);
      //   todoInput.value = "";
      // }
    }
  };
  console.log(tasks);
  return (
    <div className="container text-center mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dayTime" className="form-label">
            {`Day & Time`}
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="dayTime"
            // placeholder="Enter your Date & Time"
            value={dayTime}
            onChange={(e) => setDayTime(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
