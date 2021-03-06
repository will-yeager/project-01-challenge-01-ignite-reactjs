import { useState } from "react";
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

export const Task = ({
  id,
  title,
  isCompleted,
  onDeleteTask,
  onIsCompletedCheckBox,
}: ITaskProps) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  const handleIsCompletedCheckBox = (isChecked: boolean) => {
    setIsChecked(isChecked);
    onIsCompletedCheckBox(id, isChecked)
  };

  return (
    <div className="task-box">
      <CheckBox
        handleChangeCheckBox={handleIsCompletedCheckBox}
        isChecked={isChecked}
      />
      <p className={!isChecked ? 'task-title' : 'task-title-unchecked'}>{title}</p>
      <DeleteButton onDeleteTask={handleDeleteTask} />
    </div>
  );
};
