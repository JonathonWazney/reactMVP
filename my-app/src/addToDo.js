import React, {useState} from "react";

function addtodos(){
    
    const [newTask, setnewTask] = useState('')
    const data = {task: newTask, userid: 1}
 

 const addtolist = () => {
     fetch('/api/list',{
         method:"POST",
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     })
    }

 
 
     console.log(data)
 
return(
    <div className="addtodo">
        <input className='addaddTolist' type='text' onChange={(e) => setnewTask(e.target.value)} ></input>
        <button onClick={addtolist}>Add to list</button>
    </div>
)
} 
export default addtodos