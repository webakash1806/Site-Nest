import React, { Suspense, useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation, matchPath } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import ServicePage from './Pages/ServicePage';
import routeTitles from './Hooks/routeTitles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import seoMetaDescriptions from './Hooks/seoMetaDescriptions';
import seoKeywords from './Hooks/seoKeywords';
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


  const getMetaData = (currentPath) => {
    const matchedRoute = routeTitles.find(route => matchPath(route.path, currentPath));
    return matchedRoute ? matchedRoute.title : 'Page';
  };

  const currentPath = location.pathname;
  const routeTitle = getMetaData(currentPath)

  const getDescription = (currentPath) => {
    const matchedRoute = seoMetaDescriptions.find(route => matchPath(route.path, currentPath));
    return matchedRoute ? matchedRoute.description : 'Page';
  };

  const routeDesc = getDescription(currentPath)

  const getKeywords = (currentPath) => {
    const matchedRoute = seoKeywords.find(route => matchPath(route.path, currentPath));
    return matchedRoute ? matchedRoute.description : 'Page';
  };

  const routeKeywords = getKeywords(currentPath)


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`${routeTitle}`}</title>
          <meta name="author" content="Akash Kumar Singh | Ayush Mishra" />
          <meta name="description" content={routeDesc} />
          <meta name="keywords" content={routeKeywords} />
        </Helmet>
      </HelmetProvider>
      <Header />
      <Suspense fallback={<div className='h-[90vh] w-full flex items-center justify-center'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services/web-services' element={<WebService />} />
          <Route path='/services/e-commerce-services' element={<EcommerceService />} />
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
