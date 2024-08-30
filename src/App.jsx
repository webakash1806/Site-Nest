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
import CalendlyButton from './Components/Calendly';
import FAQPage from './Pages/FAQPage';

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
  const location = useLocation();

  // Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Handle scroll to show/hide button
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = debounce(() => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 100); // Adjust the delay time as needed

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
  const routeTitle = getMetaData(currentPath);

  const getDescription = (currentPath) => {
    const matchedRoute = seoMetaDescriptions.find(route => matchPath(route.path, currentPath));
    return matchedRoute ? matchedRoute.description : 'Page';
  };

  const routeDesc = getDescription(currentPath);

  const getKeywords = (currentPath) => {
    const matchedRoute = seoKeywords.find(route => matchPath(route.path, currentPath));
    return matchedRoute ? matchedRoute.description : 'Page';
  };

  const routeKeywords = getKeywords(currentPath);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{`Binary Wise Tech | ${routeTitle}`}</title>
          <meta name="author" content="Akash Kumar Singh | webakash1806" />
          <meta name="description" content={routeDesc} />
          <meta name="keywords" content={routeKeywords} />

          {/* Open Graph / Facebook Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={routeTitle} />
          <meta property="og:description" content={routeDesc} />
          <meta property="og:image" content={"routeImage"} />  {/* Include a representative image URL */}
          <meta property="og:url" content={"routeUrl"} /> {/* Include the URL of the page */}
          <meta property="og:site_name" content="Binary Wise Tech" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={routeTitle} />
          <meta name="twitter:description" content={routeDesc} />
          <meta name="twitter:image" content={"routeImage"} /> {/* Include the same image used for Open Graph */}
          <meta name="twitter:site" content="@yourTwitterHandle" /> {/* Replace with your Twitter handle */}
          <meta name="twitter:creator" content="@yourTwitterHandle" />

          {/* Mobile Viewport Meta Tag */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Canonical Link */}
          <link rel="canonical" href={"http://localhost:5173/"} />

          {/* Robots Meta Tags */}
          <meta name="robots" content="index, follow" /> {/* Ensures search engines can index and follow links */}

          {/* Favicons */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* Additional Meta Tags for SEO */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#FFFFFF" /> {/* Defines the theme color for mobile browsers */}
          <meta name="rating" content="General" /> {/* Indicates the content rating of your page */}

          {/* Other Open Graph Tags */}
          <meta property="og:locale" content="en_US" /> {/* Locale settings */}
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>
      </HelmetProvider>
      <Header />
      <Suspense fallback={<div className='h-[90vh] w-full flex items-center justify-center'>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle r="32" cy="40" cx="40" id="test"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect height="64" width="64" y="8" x="8"></rect>
          </svg>
        </div>
      </div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services/web-services' element={<WebService />} />
          <Route path='/services/e-commerce-services' element={<EcommerceService />} />
          <Route path='/services/graphic-services' element={<GraphicDesignService />} />
          <Route path='/services/digital-marketing-services' element={<DigitalMarketingService />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/schedule-meeting' element={<CalendlyButton />} />
          <Route path='/FAQ' element={<FAQPage />} />
        </Routes>
      </Suspense>
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 flex items-center justify-center right-4 z-20 p-[0.6rem] rounded-full bg-[#2A4CFF] text-white shadow-lg"
          aria-label="Scroll to top"
        >
          <MdKeyboardDoubleArrowUp className='text-[1.7rem]' />
        </button>
      )}
    </div>
  );
};

export default App;
