import './App.css';

function App() {
  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget)
    let username = formData.get("username");
    let password = formData.get("password");

    console.log(username)
    console.log(password)
  }

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type="text" name='username' id='username' />
        </div>

        <div>
           <label htmlFor='password'>Password</label>
          <input type="password" name='password' id='password'/>
        </div>
        <input type="submit" value='Login' />
      </form>
    </div>
  );
}

export default App;
