import React,{useState} from 'react';
import Delete from './assets/delete.png';
function ToDoList(){
    const [task,setTask]=useState(["wake up","sfd","fkjdf"]);
    const [newTask,setNewTask]=useState("");
    const [complitTask,setComplitTask]=useState([])
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
     function addTask(){
     if(newTask.trim()!==""){
        setTask((t)=>[...t,newTask]);
     setNewTask(""); 
     }
    }
    function deleteTask(index){
        const updatedTasks=task.filter((_,i)=>i!==index);
        setTask(updatedTasks);
    }
   
    function moveTaskUpp(index){
        if(index>0){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index<task.length){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function editeTask(index){
          const updatedTasks = [...task];
  updatedTasks[index] = editedTask.trim();
  setTask(updatedTasks);
  setEditingIndex(null);
  setEditedTask("");
    }
    function toggleComplite(index){
       setComplitTask((prev)=>prev.includes(index)
        ?prev.filter((_,i)=>i!==index):[...prev,index]  
    )
    }
    return(<div className="main-containter">
        <div className="container">
            <h1>To-Do-List</h1>
        <input type="text"
        placeholder='Enter a taxt'
        className="enter"
        value={newTask}
        onChange={handleInputChange}/>
        <button className='add' onClick={()=>addTask()}>Add</button>
        <ol>
            {task.map((task,index)=>
            <li key={index} className="list">

                <input type="checkbox" className='check'
                checked={complitTask.includes(index)} 
                onChange={()=>toggleComplite(index)}/>
                <span style={{textDecoration:complitTask.includes(index)?'line-through':'none'}}>
                 {task}
                </span>
                <div className="edite">
               <button className="delete" onClick={()=>deleteTask(index)}>
                <img src={Delete} alt="" height={20}/>
               </button>
               {/* <button onClick={()=>editeTask(index)}>
                Edite
               </button> */}
               <button className="up" onClick={()=>moveTaskUpp(index)}>
                ⬆️
               </button>
               <button className="down" onClick={()=>moveTaskDown(index)}>
                ⬇️
               </button>
                </div>

            </li>
            )}
        </ol>
        </div>
    </div>)
}
export default ToDoList