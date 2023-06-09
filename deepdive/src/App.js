import TodoList from './components/TodoList';

function App() {

    // let numbers = [1, 2,3, 4, 5];

    return (
      <div className="site-wrapper">
        <TodoList />
        <ul>

          {/* {numbers.map((x, i) => <li key={i}>{x}</li>)} */}
        </ul>

      </div>
    );
}

export default App;
