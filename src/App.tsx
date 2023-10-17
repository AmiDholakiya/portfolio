import { useEffect } from 'react';
import './App.css';
import { Header, Home, AboutMe, MySkills, MyWork, Contact, Preloader, ErrorPage, ProfessionalProfile } from './components';
import { RootState, useAppDispatch } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { fetchPortfolio } from './redux/portfolioSlice';
import AOS from "aos";
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(
    (state: RootState) => state.portfolio.isLoading
  );
  const error = useSelector(
    (state: RootState) => state.portfolio.error
  );

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
      {
         (!isLoading && error) ? <ErrorPage /> : <>
          <div>
            <div className='entry_page'>
              <Header />
            </div>
            <div>
                { (isLoading) ?  
        <Preloader /> : <>
                  <Home />
                  <AboutMe />
                  <ProfessionalProfile />
                  <Contact />
        </>}
                  
            </div>
          </div>
        </>
      }


    </BrowserRouter>

  );
}

export default App;
