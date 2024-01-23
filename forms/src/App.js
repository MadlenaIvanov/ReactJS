import { useState } from 'react';
import './App.css';

function App() {

  const [isValid, setIsValid] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget)
    let { username, password, isAdmin } = Object.fromEntries(formData)

    console.log(username)
    console.log(password)
    console.log(Boolean(isAdmin))
  }

  const onChange = (e) => {
    let currentText = e.target.value
    
    if(currentText.length < 3) {
      console.log('too short');
      setIsValid(false)
    } else {
      setIsValid(true)
    }

    console.log(currentText)
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type="text" name='username' id='username' defaultValue="Pesho" onChange={onChange}/>
          {!isValid && <div style={{color: 'red'}}>This input is invalid</div>}
        </div>

        <div>
           <label htmlFor='password'>Password</label>
          <input type="password" name='password' id='password' defaultValue="asd" />
        </div>

        <div>
           <label htmlFor='isAdmin'>Is Admin</label>
          <input type="checkBox" name='isAdmin' id='isAdmin' defaultChecked />
        </div>
        <input type="submit" value='Login' />
      </form>
    </div>
  );
}

export default App;
