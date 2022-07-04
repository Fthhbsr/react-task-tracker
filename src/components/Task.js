import { AiOutlineClose } from "react-icons/ai";
// import { useState } from "react";

const Task = ({ id, isDone, task, dayTime, updateRender }) => {
  //   const [done, setDone] = useState(isDone);
  //   let className = done
  //     ? "task-dayTime text-decoration-line-through"
  //     : "task-dayTime";

  const handleClick = () => {
    // setDone(!isDone);
    const updateList = JSON.parse(localStorage.getItem("tasks"));
    const update = updateList.map((item) =>
      item.id === id
        ? {
            id: id,
            isDone: !isDone,
            task: task,
            dayTime: dayTime,
          }
        : item
    );
    //   console.log(update);
    //   setTaskList(update);
    localStorage.setItem("tasks", JSON.stringify(update));
    updateRender();
  };

  const handleDelete = () => {
    const updateList = JSON.parse(localStorage.getItem("tasks"));
    const delList = updateList.filter((item) => item.id !== id);
    console.log(delList);
    // setTaskList(delList);
    // console.log(taskList);
    localStorage.setItem("tasks", JSON.stringify(delList));
    updateRender();
  };

  return (
    <div className="task">
      <div className="isDone">
        {isDone && <div className="task-done">.</div>}
        <div
          className={
            isDone
              ? "task-dayTime text-decoration-line-through"
              : "task-dayTime"
          }
          onClick={() => handleClick()}
        >
          <h4>{task}</h4>
          <p>{dayTime}</p>
        </div>
      </div>

      <div>
        <AiOutlineClose
          className="task-close text-danger"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default Task;
