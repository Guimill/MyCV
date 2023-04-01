import Header from '../components/header'
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <>
    <Header />
        <Navbar />
        <Sidebar />
            <main>
                <Outlet />
            </main>
    </>
  );
}