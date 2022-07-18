import { useEffect, useState } from "react";
import { Header, Input, TasksList } from "./components";

import "./App.css";
import { NoTasks } from "./components/NoTasks";

export interface ITask {
  id: any;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>(JSON.parse(localStorage.getItem("tasks") || "[]"));

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
  };

  const deleteTask = (id: string) => {
    const tasksWithoutDeletedTask = tasks.filter((task) => task.id !== id);
    setTasks([...tasksWithoutDeletedTask]);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Input createNewTask={handleCreateNewTask} />
        <div className="App-display">
          <div className="App-statistics">
            <p className="App-created">
              Tarefas criadas <span className="App-span">{tasks.length}</span>
            </p>
            <p className="App-concluded">
              Tarefas concluidas{" "}
              <span className="App-span">
                {getNumberOfTasksCompleted()} de {tasks.length}
              </span>
            </p>
          </div>
          {tasks.length === 0 ? (
            <NoTasks></NoTasks>
          ) : (
            <>
              <TasksList
                tasks={tasks}
                handleDeleteTask={deleteTask}
                handleChangeCompletedTaskStatus={changeCompletedTaskStatus}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
