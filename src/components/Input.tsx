import { ChangeEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { AiOutlinePlusCircle } from 'react-icons/ai' 
import "./Input.css";

interface IInputProps {
  createNewTask: (task: {
    id: string;
    title: string;
    isCompleted: boolean;
  }) => void;
}

export const Input = ({ createNewTask }: IInputProps) => {
  const [task, setTask] = useState<string>("");

  const handleChangeNewTaskName = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleCreateNewTask = () => {
    if (task === "") return;

    const newTask = {
      id: uuidV4(),
      title: task,
      isCompleted: false,
    };

    createNewTask(newTask);
    setTask("")
  };

  return (
    <div>
      <input value={task} onChange={handleChangeNewTaskName}></input>
      <button className="input-create-btn"onClick={handleCreateNewTask}>Criar <span><AiOutlinePlusCircle/></span> </button>
    </div>
  );
};
