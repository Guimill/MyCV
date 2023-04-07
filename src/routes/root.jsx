import Header from '../components/header';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/index';

export default function Root() {

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}