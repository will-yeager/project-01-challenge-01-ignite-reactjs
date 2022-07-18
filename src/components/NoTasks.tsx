import "./NoTasks.css";
import { TbClipboardText } from "react-icons/tb"

export const NoTasks = () => {

  return (
    <div className="notasks-box">
      <TbClipboardText color="var(--gray-400)" fontSize={'5rem'}/>
      <p className="notasks-text">Você não tem tarefas cadastradas</p>
      <p className="notasks-text">Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
