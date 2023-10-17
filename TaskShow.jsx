import { useState } from "react";
import TaskCreate from "./TaskCreate";
import {useContext } from 'react';
import TasksContext from '../context/task';

function TaskShow({task}) {
    
    const {deleteTaskById, editTaskById} = useContext(TasksContext);

    const [showEdit, setShowEdit] = useState(false) 

    const handleDeleteClick = () => {
        // onDelete(task.id);
        deleteTaskById(task.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    //onUpdate propsundan gelen parametreler task.id, title, taskDesc
    const handleUpdateSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false);                 //güncelleme gerçekleştiği için edit kapatıldı
        // onUpdate(id, updatedTitle, updatedTaskDesc)  
        editTaskById(id, updatedTitle, updatedTaskDesc);  
    }

    return (
        <div className="task-show">
          {showEdit ? (
            <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleUpdateSubmit}/>
          ) : (
            <div>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div className="task-buttons">
                    <button onClick={handleDeleteClick}>Sil</button>
                    <button onClick={handleEditClick}>Güncelle</button>
                </div>
            </div>
          )}
        </div>
      );
}

export default TaskShow;