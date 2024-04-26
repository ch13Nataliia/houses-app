
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import Houses from './pages/Houses';
import Apartments from './pages/Apartments';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';



function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
<Router>
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />}/>
      <Route path='aboutus' element={<AboutUs />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='properties' element={<Properties />}/>
      <Route path='team' element={<Team />}/>
      <Route path='houses' element={<Houses />}/>
      <Route path='apartments' element={<Apartments />}/>
      <Route path='rooms' element={<Rooms />}/>
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
</Router>
  );
}

export default App;
