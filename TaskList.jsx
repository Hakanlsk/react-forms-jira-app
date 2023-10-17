import TaskShow from "./TaskShow";
import {useContext } from 'react';
import TasksContext from '../context/task';

function TaskList() {
    const {tasks} = useContext(TasksContext)
    return ( 
        <div className="task-list">
            {tasks.map((task, index)=>{      //task dizinin içindeki her bir taska karşılık gelir ve diziyi maple gezeriz
                return(
                    <TaskShow key={index} task={task}/>
                )
            })}
        </div>
     );
}

export default TaskList;