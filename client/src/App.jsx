import React from 'react'
import { Navbar, Welcome, Loader, Footer, Services, Transactions } from './components';

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}
