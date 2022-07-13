import { useState } from "react";
import { Header, Input, TasksList } from "./components"

import "./App.css";

export interface ITask {
  id: any;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleCreateNewTask = (newTask: {
    id: string;
    title: string;
    isCompleted: boolean;
  }) => {
    setTasks([...tasks, newTask]);
  };

  const getNumberOfTasksCompleted = () => {
    return tasks.filter((item) => item.isCompleted === true).length;
  };

  const changeCompletedTaskStatus = (id: string, status: boolean) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) task.isCompleted = status;
      return task;
    });
    setTasks(tasksUpdated);
  }

  const deleteTask = (id: string) => {
    const tasksWithoutDeletedTask = tasks.filter((task) => task.id !== id);
    setTasks([...tasksWithoutDeletedTask]);
  }

  return (
    <div className="App">
      <Header/>
      <Input createNewTask={handleCreateNewTask} />
      <div className="tasks-display">
        <div className="tasks-statistics">
          <p className="tasks-created">
            Tarefas criadas <span className="tasks-span">{tasks.length}</span>
          </p>
          <p className="tasks-concluded">
            Tarefas concluidas{" "}
            <span className="tasks-span">
              {getNumberOfTasksCompleted()} de {tasks.length}
            </span>
          </p>
        </div>
        <TasksList tasks={tasks} handleDeleteTask={deleteTask} handleChangeCompletedTaskStatus={changeCompletedTaskStatus}/>
      </div>
    </div>
  );
}

export default App;
