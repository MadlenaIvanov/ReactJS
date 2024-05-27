import { useState, useEffect } from "react";

import AuthContext from "./contexts/authContext.js";

import Counter from './components/Counter.js'
import CharacterList from './components/CharacterList.js'
import './App.css';
import useDidMount from "./hooks/useDidMount.js";

function App() {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    name: "Pesho",
    age: 30,
    hobbies: ['first', 'second', 'third']
  })

  // const name = stateResult[0];
  // const setName = stateResult[1];

  //ComponentDidMount
  useDidMount(() => {
    console.log('effect')
    setTimeout(() => {
      setName(oldState => oldState + 'o');


    }, 1500)
  }, [count]);

  const addHobby = (hobby) => {
    setInfo(oldState => ({
      ...oldState,
      hobbies: [...oldState.hobbies, hobby]
    }))
  }

  return (
    <AuthContext.Provider value={{count, user: info, addHobby}}>
    <div className="App">
      <header className="App-header">
        <h2>{!name ? 'Loading...' : name}</h2>

        {count < 10
          ? <Counter/>
          : null
        }
        
        <h5>Counter: {count}</h5>
        <button onClick={() => setCount(x => x + 1)}>+</button>

        <ul>
          {info.hobbies.map(x => <li key={x}>{x}</li>)}
        </ul>

        <CharacterList />
      </header>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
