import { useEffect } from 'react';
import './App.css';
import { Header, Home, AboutMe, MySkills,MyWork, Contact  } from './components';
import { useAppDispatch } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { fetchPortfolio } from './redux/portfolioSlice';
import AOS from "aos";

function App() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch])

  return (
    <BrowserRouter>
      <div>
        <div className='entry_page'>
            <Header />
            
        </div>
        <div>
            <Home />
            <AboutMe />
            <MySkills />
            <MyWork />
            <Contact /> 
        </div>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
