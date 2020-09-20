import React from 'react';
import Navbar from './components/js/Navbar'
import AboutMe from './components/js/AboutMe'
import MyStory from './components/js/MyStory'
import MyStack from './components/js/MyStack'
import MyWorks from './components/js/MyWorks'
import Footer from './components/js/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <MyStory />
      <MyStack />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
