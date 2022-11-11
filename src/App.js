import './App.css';
import { Navbar } from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { Profile } from './Elementos/Profile';
import { LoginButton } from './Elementos/LoginButton';
import { LogoutButton } from './Elementos/LogoutButton';



function App() {



  return (
    <div class="App">
      <Navbar />
      <Profile />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;