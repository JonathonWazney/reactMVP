import React, {useEffect, useState} from "react"

function list() {
    const [listTask, setlistTask] = useState(null)

    useEffect(() => {
     getList()
    },[])
    
    const getList = () => {
    fetch('/api/list')
    .then(res => res.json())
    .then(data => setlistTask(data))
    .catch(error => console.log(error))
    }
    const deleteTask = (e) =>{
        console.log(e.target.value)
        const data = {list_id: e.target.value}
        fetch('/api/list', {
            method:"DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }) 
        getList()
    }
    const updateTask = (e) =>{
        const alert = window.prompt('Update Task')
        const data = {task: alert, list_id: e.target.value}

        fetch('/api/list',{
            method:"PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }) 
        getList()
    }

      return (
        <div>
          {listTask ? listTask.map((list) => (
              <div className="list">
             <p key={list.list_id}>{list.task}</p>
             <button className="delete" onClick={deleteTask} value={list.list_id}>X</button>
             <button className="update" onClick={updateTask} value={list.list_id}>update</button> 
             </div>
          )) : null}
          
    
        </div>
      )
    }
    
    export default list 