import logo from "./logo.svg";
import "./App.css";
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Login />
        <Routes>
        
          <Route path="/home" exact element={<Home/>} />
          
        </Routes>
        
      </Router>
    );
}





export default App;
