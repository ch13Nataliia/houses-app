import { Outlet } from 'react-router-dom';
import Header from './Navbar/Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
