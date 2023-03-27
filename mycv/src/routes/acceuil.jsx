import Header from '../components/header'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

export default function Acceuil() {
  return (
    <div>
    <Header />
        <Navbar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </div>
  );
}