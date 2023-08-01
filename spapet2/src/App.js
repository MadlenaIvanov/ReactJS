import { Routes, Route } from 'react-router-dom';

import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Header from "./components/Header";
import Login from "./components/Login";
import MyPets from "./components/MyPets";
import Register from "./components/Register";
import Create from './components/Create';

function App() {
  return (
    <div id="container">
      <Header />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/details" element={<Details />} />
          <Route path="/edit" element={<Edit />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />

        </Routes>
      </main>


        <footer id="site-footer">
            <p>@PetMyPet</p>
        </footer>

    </div>
  );
}

export default App;
