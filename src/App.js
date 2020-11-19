import './App.css';
import Achievement from './Components/Achievement/Achievement';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header/Header';
import Service from './Components/Service/Service';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <Contact />
      <Achievement/>
      <Pricing/>
    </div>
  );
}

export default App;
