import TaskShow from "./TaskShow";

function TaskList({tasks}) {
    return ( 
        <div>
            {tasks.map((task, index)=>{      //task dizinin içindeki her bir taska karşılık gelir ve diziyi maple gezeriz
                return(
                    <TaskShow key={index} task={task}/>
                )
            })}
        </div>
     );
}

export default TaskList;