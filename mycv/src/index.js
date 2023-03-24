import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/css/style.css'
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Content from './components/content';
import Navbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <main>
      <Sidebar />
      <Content />
    </main>
    <Footer />
  </React.StrictMode>
);