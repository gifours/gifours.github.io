import React from 'react';
import Profile from './components/Profile';
import Header from './components/Header';
import About from './components/About';
import Porto from './components/Porto';
import Client from './components/Client';
import Footer from './components/Footer';
import Sertif from './components/Sertif';
import Test from './components/test';

const App = () => {
  
  return (
    <div className="bg-white dark:bg-dark font-body">
      <Header/>
      <Profile/>
      <About/>
      <Test/>
      <Porto/>
      <Client/>
      <Sertif/>
      <Footer/>
      <a href="#home" class="scroll-smooth fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 p-4 items-center justify-center shadow-lg shadow-primary/50 dark:shadow-primary2/50 rounded-full bg-primary dark:bg-primary2 hover:animate-pulse" id="to-top">
        <span class="mt-1 block h-3 w-3 rotate-45 border-t-[3px] border-l-[3px] dark:border-dark"></span>
      </a>
    </div>
  );
};

export default App;
