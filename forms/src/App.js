import { useState, useEffect, useRef } from 'react';
import HobbyList from './components/HobbyList';
import './App.css';

function App() {

  const [username, setUsername] = useState('Pesho')
  const [services, setServices] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const passwordRef = useRef();

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/services')
    .then(res => res.json())
    .then(res => {
      setServices(Object.values(res));
    })
  }, []);


  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget)
    let { username, password, isAdmin, services } = Object.fromEntries(formData)

    console.log(username)
    console.log(password)
    console.log(Boolean(isAdmin))
    console.log(services)
  }

  const onChange = (e) => {
    setUsername(e.target.value)
    
    if(username.length < 3) {
      console.log('too short');
      setIsValid(false)
    } else {
      setIsValid(true)
    }

    console.log(username)
  }

  const onServiceChange = (e) => {
    setUsername('');
    console.log(e.target.value);

    console.log(passwordRef.current.value);
    passwordRef.current.value = '';
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type="text" name='username' id='username' value={username} onChange={onChange}/>
          {!isValid && <div style={{color: 'red'}}>This input is invalid</div>}
        </div>

        <div>
           <label htmlFor='password'>Password</label>
          <input type="password" name='password' id='password' defaultValue="asd" ref={passwordRef} />
        </div>

        <div>
           <label htmlFor='services'>Services</label>
          <select name='services' id='services' onChange={onServiceChange}>
            {services.map(x => <option key={x._id} value={x._id}>{x.name}</option>)}
          </select>
        </div>

        <div>
           <label htmlFor='isAdmin'>Is Admin</label>
          <input type="checkBox" name='isAdmin' id='isAdmin' defaultChecked />
        </div>



        <input type="submit" value='Login' />
      </form>

      <HobbyList />
    </div>
  );
}

export default App;
