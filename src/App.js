import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/home";

import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Notfound from './components/Pages/Notfound';
import Adduser from './Users/adduser';
import Edituser from './Users/editUser';
import User from './Users/viewuser';


function App() {
  return (
      <Router>

          <div className="App">
              <Navbar />

              <Routes>
                  <Route  path="/" element={<Home />} />
                  
                  <Route  path="/user/add" element={<Adduser />} />
                  <Route  path="/user/edit/:id" element={<Edituser />} />
                  <Route  path="/user/view/:id" element={<User/>} />
                  <Route path="*" element={<Notfound />} />
              </Routes>
             



          </div>
          </Router>
  );
}

export default App;
