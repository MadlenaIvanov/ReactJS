import React from "react";
import ToDoListItem from "./ToDoListItem"

export default function ToDoList() {

   let todoState = React.useState(['Clean Your ROom', 'Run', 'Learn']);

    let todos = todoState[0];
   // let setTodos = todoState[1];
   let [todo, setTodo] = React.useState('initial todo');

   let [count, setCount] = React.useState(0);

   let [name, setName] = React.useState('');

   const addButtonClickHandler = (е) => {
    setCount(count + 1);
    setName('Pesho')
   };

   const addButtonClickHandlerTwo = function() {
      setCount(count + 1);
   };

   // target is the <input>-a, взимаме стойността на инпута
   const inputChangeHandler = (e) => {
      setName(e.target.value);
   }



   let firstTask = 'Clean your room modified';
   let firstColour = 'blue';
   let person = {
      name: 'Pesho',
      age: 52
   };

   const peshoHolder = (
      <h3>He is the best</h3>
   )


     return (
        <>

        {/* only when there's a name show this <h2></h2> */}
        {name && <h2>Counter - {name}</h2>}
        
        {name || <h2>No name</h2>}

         <ul>

            <ToDoListItem>{count}</ToDoListItem>

            { name === 'Pesho' 
               ? peshoHolder 
               : <h3>Nah</h3>
            }


            <input type="text" onBlur={inputChangeHandler} />

            {/* these two are the same, we can pick which to choose */}
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={setCount.bind(null, count + 1)}>Add</button>


            <button onClick={addButtonClickHandler}>Add</button>
            <button onClick={addButtonClickHandlerTwo}>Add</button>



            <li>-----------------------</li>

            {todos.map(x => <ToDoListItem>{x}</ToDoListItem>)}
            <li>-----------------------------------</li>
            <ToDoListItem>{todo}</ToDoListItem>
            <li>-----------------------------------</li>
            {/* <ToDoListItem text="Clean" /> */}
            <ToDoListItem color={firstColour}>{firstTask}</ToDoListItem>
            <ToDoListItem color={'light' + firstColour}>{firstTask}</ToDoListItem>
            <ToDoListItem color='pink'>
               <p>Run</p>
               <p>Run 2</p>
            </ToDoListItem>
            <ToDoListItem color='red'>fjdkh</ToDoListItem>
            <ToDoListItem color='green' person={person}>Test Object</ToDoListItem>
            {/* <ToDoListItem text="Run" />
            <ToDoListItem text="fdjhf" /> */}
            {/* <li>Clean your room</li>
            <li>Go shopping</li>
            <li>Learn React</li> */}
            <li>-----------------------------------</li>

            <button onClick={() => console.log('clicked')}>Modify</button>
            {/* you can use the let [todo, setTodo] = React.useState('initial todo');*/}
            <button onClick={() => setTodo('Modified')}>Modify</button>

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