import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import MediadoresPage from './components/MediadoresPage';
import IdentificarPage from './components/IdentificarPage';
import FasesPage from './components/FasesPage';
import CiudadanoPage from './components/CiudadanoPage';
import ActualidadPage from './components/ActualidadPage';

export default function App() {
  const [view, setView] = useState('home');      // current main view
  const [subview, setSubview] = useState(null);   // sub-section within some views
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = (newView, newSubview = null) => {
    // If trying to go to dashboard without login, redirect to login
    if (newView === 'dashboard' && !isLoggedIn) {
      setView('login');
      return;
    }
    setView(newView);
    setSubview(newSubview);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Full-page views (no header/footer)
  if (view === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={() => navigate('home')} />;
  }

  if (view === 'dashboard' && isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Views with header/footer
  const showFooter = !['login', 'dashboard'].includes(view);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onNavigate={navigate}
        currentView={view}
        isLoggedIn={isLoggedIn}
      />

      <main className="flex-1">
        {view === 'home' && <HomePage onNavigate={navigate} />}
        {view === 'identificar' && <IdentificarPage onBack={() => navigate('home')} />}
        {view === 'mediadores' && <MediadoresPage onBack={() => navigate('home')} />}
        {view === 'fases' && <FasesPage onBack={() => navigate('home')} />}
        {view === 'ciudadano' && <CiudadanoPage subvista={subview} onBack={() => navigate('home')} />}
        {view === 'actualidad' && <ActualidadPage subvista={subview} onBack={() => navigate('home')} />}
      </main>

      {showFooter && <Footer onNavigate={navigate} />}
    </div>
  );
}
