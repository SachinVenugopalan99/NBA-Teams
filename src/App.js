import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import TeamListing from "./containers/teamListing/teamListing";

const App = () => {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< TeamListing />}></Route>
          </Routes>
          </div>
       </Router>
    );
  }

export default App;