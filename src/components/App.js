import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setAllTasks] = useState(TASKS)
  function onTaskFormSubmit(addTask) {
    const updatedTasks = [...allTasks, addTask]
    setAllTasks(updatedTasks)
  }
  // const [taskList, setTaskList] = useState(TASKS.map(task => {
  //   return {
  //     text: task.text,
  //     category: task.category,
  //     display: true
  //   }
  // })) 

  // const handleDeleteTask = (taskToDelete) => {
  //   setTaskList(taskList.filter(task => task.text !== taskToDelete))
  // }

  // const handleFilterTask = (category) => {
  //   if(category === 'All'){
  //     setTaskList(taskList.map(task => {
  //       return {
  //         ...task,
  //         display: true
  //       }
  //     }))
  //   } else {
  //     setTaskList(taskList.map(task => {
  //       if(task.category == category){
  //         return {
  //           ...task,
  //           display: true
  //         }
  //       } else {
  //         return {
  //           ...task,
  //           display: false
  //         }
  //       }
  //     }))
  //   }
  // }

  // const onTaskFormSubmit = (newTask) => {
  //   console.log(newTask)
  //   setTaskList([...taskList,{
  //     text: newTask.text,
  //     category: newTask.category,
  //     display: true
  //   }])
  // }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} TASKS={TASKS} allTasks={allTasks} setAllTasks={setAllTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={allTasks} setAllTasks={setAllTasks} />
      
    </div>
  );
}

export default App;
