import TaskShow from "./TaskShow";

function TaskList({tasks, onDelete, onUpdate}) {
    return ( 
        <div className="task-list">
            {tasks.map((task, index)=>{      //task dizinin içindeki her bir taska karşılık gelir ve diziyi maple gezeriz
                return(
                    <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
                )
            })}
        </div>
     );
}

export default TaskList;