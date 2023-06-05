import ToDoListItem from "./ToDoListItem"

export default function ToDoList() {
     return (
        <>
        <h2>Tasks</h2>
        
         <ul>
            <ToDoListItem text="Clean" />
            <ToDoListItem text="Run" />
            <ToDoListItem text="fdjhf" />
            <li>Clean your room</li>
            <li>Go shopping</li>
            <li>Learn React</li>
       </ul>
       </>
     )
 }

// import React from "react"

// class ToDoList extends React.Component {
//     render() {
//         return (
//             <ul>
//             <li>Clean your room</li>
//             <li>Go shopping</li>
//             <li>Learn React</li>
//             <li>Learn Class Components</li>
//           </ul>
//         )
//     }
// }

// export default ToDoList;