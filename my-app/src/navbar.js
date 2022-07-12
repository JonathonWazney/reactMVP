import React from "react";

function navbar(){
    return(
        <nav>
          <img className="logo" src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-1-1/512/Checklist_clipboard_inventory_list_report_tasks_todo-512.png"></img>
          <ul>
            <li> <a href='/home'>HOME</a></li>
            <li><a href="/list">LIST</a></li>
          </ul>
        </nav>
    
    )
}
export default navbar