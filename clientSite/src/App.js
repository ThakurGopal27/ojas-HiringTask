import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Home/>
    </div>
  );
}

export default App;
