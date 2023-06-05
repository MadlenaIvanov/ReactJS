
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
        <main>
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
