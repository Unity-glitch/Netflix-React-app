import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SetUpOne from '../src/Pages/SetUpOne';
import ChoosePlan from "./Pages/ChoosePlan";
import SearchMovies from "./Pages/SearchMovies";  



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/SignIn' element={<SignIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/SetUpOne" element={<SetUpOne />}/>
          <Route path="/ChoosePlan" element={<ChoosePlan />}/>
          <Route path="/SearchMovies" element={<SearchMovies />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
