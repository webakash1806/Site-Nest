import React, { Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import DigitalMarketingService from './Pages/DigitalMarketingService';

// Lazy load components
const Home = React.lazy(() => import('./Pages/Home'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage'));
const AboutPage = React.lazy(() => import('./Pages/AboutPage'));
const WebService = React.lazy(() => import('./Pages/WebService'));
const EcommerceService = React.lazy(() => import('./Pages/EcommerceService'));
const GraphicDesignService = React.lazy(() => import('./Pages/GraphicDesignService'));

const App = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const handleStart = () => NProgress.start();
  //   const handleDone = () => NProgress.done();

  //   handleStart();
  //   const unlisten = navigate(() => {
  //     handleStart();
  //     handleDone();
  //   });

  //   return () => {
  //     unlisten();
  //     handleDone();
  //   };
  // }, [location.pathname, navigate]);

  return (
    <>
      <Header />
      <Suspense fallback={<div className='h-[90vh] w-full flex items-center justify-center'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services/web-services' element={<WebService />} />
          <Route path='/services/ecommerce-services' element={<EcommerceService />} />
          <Route path='/services/graphic-services' element={<GraphicDesignService />} />
          <Route path='/services/digital-marketing-services' element={<DigitalMarketingService />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
