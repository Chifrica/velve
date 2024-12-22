import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default App;