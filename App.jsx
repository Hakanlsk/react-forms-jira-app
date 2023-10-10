import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  //TaskCreate.jsx' te onCreate propsuna yolladğımız title ve taskDesc
  const createTask = (title, taskDesc) =>{
    const createTasks = [
      ...tasks,{                                  //spread sayesinde var olan arr kopyalanır yeni task eklenip yeni arr olur
        id:Math.round(Math.random() * 999999),
        title,                                    //title : title, key ile value değeri aynıysa bu şekilde yazılabilir
        taskDesc                                   
      }
    ]
    setTasks(createTasks);
  }

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task)=>{   //id'si sil butonuna basılan task ile aynı olmayanlar 
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
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

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
