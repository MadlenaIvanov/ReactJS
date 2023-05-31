
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
        <main>
          <h2>Tasks</h2>
          <ToDoList />


        </main>

        <footer>
          <p>All rights reserverd &copy;</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
