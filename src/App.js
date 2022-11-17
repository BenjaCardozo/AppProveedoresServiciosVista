import './App.css';
import { Navbar } from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Profile } from './Elementos/Profile';
import { LoginButton } from './Elementos/LoginButton';
import { LogoutButton } from './Elementos/LogoutButton';
import Card from './Components/Card';




function App() {



  return (
    <div className="App">
      <Navbar />
      {/* <Card /> */}
      {/* <Profile /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;