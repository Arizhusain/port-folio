import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import HeroBanner from './Components/HeroBanner/HeroBanner';

function App() {
  return (
    <div className='container'>
      <Header/>
      <HeroBanner/>
      <About/>
    </div>
  );
}

export default App;
