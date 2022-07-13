import { ChangeEvent, useState } from "react";
import { HiOutlineTrash } from 'react-icons/hi' 
import { CheckBox } from "./CheckBox";
import { DeleteButton } from "./DeleteButton";
import "./Task.css";

interface ITaskProps {
  key: any;
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onIsCompletedCheckBox: (id: string, checked: boolean) => void;
}

export const Task = ({ id, title, isCompleted, onDeleteTask, onIsCompletedCheckBox }: ITaskProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleIsCompletedCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onIsCompletedCheckBox(id, event.target.checked)
  };

  return (
    <div className="task-box">
      <CheckBox handleChangeCheckBox={handleIsCompletedCheckBox} isChecked={isChecked}/>
      <p className="task-title">{title}</p>
      <DeleteButton onDeleteTask={handleDeleteTask}/>
    </div>
  );
};
