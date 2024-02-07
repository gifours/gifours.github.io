import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Website from './components/Website';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Update loading state when content has finished loading
    };

    // Event listener to handle the load event
    window.addEventListener('load', handleLoad);

    // Event listener to handle DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', handleLoad);

    // Event listener to handle readystatechange event
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        handleLoad();
      }
    };

    return () => {
      // Cleanup: Remove event listeners when component unmounts
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleLoad);
      document.onreadystatechange = null;
    };
  }, []);

  return (
    <div className={`bg-white dark:bg-dark font-body transition-all ease-in duration-500 ${loading ? 'overflow-hidden' : ''}`}>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-75 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Website />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
