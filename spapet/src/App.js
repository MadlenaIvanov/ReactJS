import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from "./services/authService";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from './components/Logout';
import MyPets from "./components/MyPets";
import Register from "./components/Register";
import Create from './components/Create';
import Details from './components/Details';

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user
    })
  }, []);

  const onLoginNav = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    })
  };

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: ''
    })
  };


  return (
    <div id="container">
      <Header {...userInfo}/>
      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* <Route path="/details" element={<Details />} />
          <Route path="/edit" element={<Edit />} /> */}
          <Route path="/login" element={<Login onLoginNav={onLoginNav} />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:petID" element={<Details />} />

        </Routes>
      </main>


        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
  );
}

export default App;
