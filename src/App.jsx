import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  //TaskCreate.jsx' te onCreate propsuna yolladğımız title ve taskDesc
  const createTask = (title, taskDesc) =>{
    const createdTasks = [
      ...tasks,{                                  //spread sayesinde var olan arr kopyalanır yeni task eklenip yeni arr olur
        id:Math.round(Math.random() * 999999),
        title,                                    //title : title, key ile value değeri aynıysa bu şekilde yazılabilir
        taskDesc                                   
      }
    ]
    setTasks(createdTasks);
  }

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
