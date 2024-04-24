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




function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/properties' element={<Properties />}/>
      <Route path='/team' element={<Team />}/>
      <Route path='/houses' element={<Houses />}/>
      <Route path='/apartments' element={<Apartments />}/>
      <Route path='/rooms' element={<Rooms />}/>
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
</Router>
  );
}

export default App;
