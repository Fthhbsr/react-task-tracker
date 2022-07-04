import Task from "./Task";

const Tasks = ({ taskList, updateRender }) => {
  //   console.log(taskList);
  return (
    <div>
      {taskList?.map((task) => (
        <Task key={task.id} {...task} updateRender={updateRender} />
      ))}
    </div>
  );
};

export default Tasks;
