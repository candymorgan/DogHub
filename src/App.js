import './App.css';
import Navbar from './Components/Navbar';
import Breeds from './Components/Breeds'
import BreedDisplay from './Components/BreedDisplay';
import Footer from './Components/Footer';
// import { Display } from './Components/Context';
// import { useContext } from 'react';

function App() {
  // const {display} = useContext(Display)
  return (
    <div className="App">
      <Navbar/>
      <Breeds />
      <BreedDisplay />
      <Footer />
      
      </div>
      
  );
}

export default App;
