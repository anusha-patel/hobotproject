import './App.css';
import '@fontsource/poppins/300.css'; // Light weight
import '@fontsource/poppins/400.css'; // Regular weight
import '@fontsource/poppins/600.css'; // Semi-bold weight


import Nav from './components/navbar/Nav';
import Hero from './components/Hero/Hero';
import Hobot from './components/Section2/Hobot';
import Youtube from './components/Section3/Youtube';
import Verified from './components/Section4/Verified';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
   
     <Nav/>
     <Hero/>
     <Hobot/>
     <Youtube/>
     <Verified/>
     <Works/>
     <Footer/>
    
    </>
   
    
  );
}

export default App;
