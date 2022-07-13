import { HiOutlineTrash } from 'react-icons/hi' 
import "./DeleteButton.css";

interface IDeleteButtonProps {
  onDeleteTask: () => void;
}

export const DeleteButton = ({ onDeleteTask }: IDeleteButtonProps) => {

  return (
      <button onClick={onDeleteTask} className="btn-deleteButton"><HiOutlineTrash/></button>
  );
};
