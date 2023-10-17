import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react';

const TasksContext = createContext();

function Provider({children}){

    const [tasks, setTasks] = useState([]);
    //TaskCreate.jsx' te onCreate propsuna yolladğımız title ve taskDesc
    const createTask = async (title, taskDesc) =>{

    //axios POST isteği
    const response = await axios.post('http://localhost:3000/tasks', {
        title,  //title:title
        taskDesc
    });

    const createdTasks = [
        ...tasks,                                   //spread sayesinde var olan arr kopyalanır yeni task eklenip yeni arr olur
        response.data                               //apiden gelen response ile task oluşturduk              
        ];
        setTasks(createdTasks);
    };

    //GET isteğimiz için fonksiyon
    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3000/tasks')
        debugger
        setTasks(response.data)
    }

    const deleteTaskById = async (id) => {
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        const afterDeletingTasks = tasks.filter((task)=>{   //id'si sil butonuna basılan task ile aynı olmayanlar 
          return task.id !== id;
        })
        setTasks(afterDeletingTasks);
      }
    
      const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
        await axios.put(`http://localhost:3000/tasks/${id}`,{
          title:updatedTitle,
          taskDesc:updatedTaskDesc
        })
        //id ile, güncelenen taskı tespit edilip yeni parametrelerle içeriği güncelleyeceğiz yeni arr oluşacak
        const updatedTasks = tasks.map((task) => {
          if(task.id === id){
            return{
              id:id,
              title:updatedTitle,
              taskDesc:updatedTaskDesc
            }
          }else{
            return task;
          }
        });
        setTasks(updatedTasks);        //yeni arr ' i set etmek
      }

      const sharedValuesAndMethods={
        tasks,
        createTask,
        fetchTasks,
        deleteTaskById,
        editTaskById
      }

    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    );
}

export {Provider}
export default TasksContext;


