import Task from "./Task";

const Tasks = ({ taskList, updateRender }) => {
  
  return (
    <div>
      <h3 className="text-center mt-4 text-dark">
        {!taskList.length && `No Task to Show`}
      </h3>
      {taskList?.map((task) => (
        <Task key={task.id} {...task} updateRender={updateRender} />
      ))}
    </div>
  );
};

export default Tasks;
