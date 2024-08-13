import React from "react";
import Task from "./Task"

function TaskList({tasks, setAllTasks}) {
  function handleDelete(taskToDelete) {
    const updatedTasks = tasks.filter(task => task.text !== taskToDelete.text)
    setAllTasks(updatedTasks)
  }

  const displayAllTasks = tasks.map((task, index) => {
    return <Task
    key={index}
    text={task.text}
    category={task.category}
    handleDelete={() => handleDelete(task)}
  />
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component
      {tasks.map((task, index) => {
        {if(task.display === true || task.display === undefined){
          return (
            <Task 
              key={index} 
              text={task.text} 
              category={task.category} 
              handleDeleteTask={handleDeleteTask} 
            /> 
          )
        }}
    })} */}
    {displayAllTasks}
    </div>
  );
}

export default TaskList;
