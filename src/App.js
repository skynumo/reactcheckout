import React, {useEffect} from 'react'; 
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layouts/Header/Header';
import { TopMenusRoutes } from './_config/TopMenus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './layouts/Footer/Footer';
import { useDispatch } from 'react-redux';
import { setCartData } from './_actions/cartActions';
import { dummyCartData } from './_data/dummyCartData';

const App = () => {

  // Dummy Data
	const cartData = dummyCartData.slice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartData(cartData))
  }, [])
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Top Menu Routes Configuration is in _config/TopMenus.js */}

          { 
            TopMenusRoutes && TopMenusRoutes.map((route, ridx) => {
              return <Route {...route} key={ridx} /> 
            }) 
          }

        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;   

 