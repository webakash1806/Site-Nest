import React, { Suspense, useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import ServicePage from './Pages/ServicePage';

// Lazy load components
const Home = React.lazy(() => import('./Pages/Home'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage'));
const AboutPage = React.lazy(() => import('./Pages/AboutPage'));
const WebService = React.lazy(() => import('./Pages/WebService'));
const EcommerceService = React.lazy(() => import('./Pages/EcommerceService'));
const GraphicDesignService = React.lazy(() => import('./Pages/GraphicDesignService'));
const DigitalMarketingService = React.lazy(() => import('./Pages/DigitalMarketingService'));

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation()
  // Handle scroll to show/hide button
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      if (window.scrollY > 50) { // Show button after scrolling down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <Route path='/services' element={<ServicePage />} />
        </Routes>
      </Suspense>
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 flex items-center justify-center right-4 z-50 p-[0.6rem] rounded-full bg-[#2A4CFF] text-white shadow-lg"
          aria-label="Scroll to top"
        >
          <MdKeyboardDoubleArrowUp className='text-[1.7rem]' />
        </button>
      )}
    </>
  );
};

export default App;
