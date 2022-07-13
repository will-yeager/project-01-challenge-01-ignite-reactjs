import { ChangeEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { AiOutlinePlusCircle } from "react-icons/ai";
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
    setTask("");
  };

  return (
    <>
      <div className="input-box">
        <input className="input-create" value={task} onChange={handleChangeNewTaskName} placeholder="Adicione uma nova tarefa"/>
        <button className="input-create-btn" onClick={handleCreateNewTask}>
          Criar <AiOutlinePlusCircle />
        </button>
      </div>
    </>
  );
};
