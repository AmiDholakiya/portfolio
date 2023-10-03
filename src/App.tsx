import { useEffect } from 'react';
import './App.css';
import { Header, Home, AboutMe, MySkills,MyWork, Contact  } from './components';
import { BrowserRouter } from 'react-router-dom'
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <div>
            <Header />
            <Home />
            <AboutMe />
            <MySkills />
            <MyWork />
            <Contact />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
