import { ITask } from "../App";
import { Task } from "../components";

interface ITasksListProps {
  tasks: ITask[];
  handleChangeCompletedTaskStatus: (id: string, status: any) => void;
  handleDeleteTask: (id: string) => void;
}

export const TasksList = ({ tasks, handleChangeCompletedTaskStatus, handleDeleteTask }: ITasksListProps) => {

  return (
    <div className="tasks-list">
      {tasks.map((item) => {
        return (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            isCompleted={item.isCompleted}
            onDeleteTask={handleDeleteTask}
            onIsCompletedCheckBox={handleChangeCompletedTaskStatus}
          />
        );
      })}
    </div>
  );
};
