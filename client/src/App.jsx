import React, { useState } from 'react';
import Loader from './components/Loader';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Collections from './pages/Collections';
import ProtectedRoute from './components/ProtectedRoute';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Navbar from './components/Navbar'; // ✅
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();

  return (
    <CartProvider>
      <ToastContainer position="top-right" autoClose={2000} />
      {!loadingComplete ? (
        <Loader onComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          {/* Only show Navbar on pages other than /auth */}
          {location.pathname !== '/auth' && <Navbar />}

          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </CartProvider>
  );
}

export default App;
