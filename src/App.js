import "./App.css";
import './formulario.css'
import { Navbar } from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (   
      <div className="App">
        <Navbar />       
        <>
            <Main />        
        </>
        <Footer />
      </div>
  );
}

export default App;
