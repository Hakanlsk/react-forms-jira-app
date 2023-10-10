import { useState } from "react";

function TaskCreate({onCreate, task, taskFormUpdate, onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : '')
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '')

    const handleChange = (event) => {              //title input valuesunu setTitle fonksiyonu ile title değişkenine atamak 
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {       //textarea valuesunu setTaskDesc fonksiyonu ile taskDesc değişkenine atamak 
        setTaskDesc(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id, title, taskDesc)
        }else{
            onCreate(title, taskDesc);
        }
        setTitle('');
        setTaskDesc('');    
    }

    return ( 
    <div>
        {''}
        {taskFormUpdate ? (
        <div className="task-update">
            <h3>Lütfen Taskı düzenleyiniz</h3>
            <form className="task-form">
            <label className="task-label">Başlığı düzenleyiniz</label>
            <input value={title} onChange={handleChange} className="task-input"/>
            <label className="task-label">Taskı düzenleyeniz</label>
            <textarea
                value={taskDesc} 
                className="task-input" 
                onChange={handleTaskChange} 
                rows={5}/>
            <button className="task-button update-button" onClick={handleSubmit}>Düzenle</button>
            </form>
        </div>
        ) : (
            <div className="task-create">
                <h3>Lütfen Task Giriniz</h3>
                <form className="task-form">
                <label className="task-label">Başlık</label>
                <input value={title} onChange={handleChange} className="task-input"/>
                <label className="task-label">Task Giriniz</label>
                <textarea
                    value={taskDesc} 
                    className="task-input" 
                    onChange={handleTaskChange} 
                    rows={5}/>
                <button className="task-button" onClick={handleSubmit}>Oluştur</button>
                </form>
            </div>
        )}    
    </div>
        
    );
}

export default TaskCreate;