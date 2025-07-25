// src/components/ProtectedRoute.jsx
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setValid(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL || '/api'}/auth/validate`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          const userData = await res.json(); // optional: get updated user info
          setValid(true);
          setUser(userData.user || user); // optionally update context
        } else {
          throw new Error('Unauthorized');
        }
      } catch {
        setValid(false);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      checkAuth();
    } else {
      setValid(false);
      setLoading(false);
    }
  }, [user, setUser]);

  if (loading) return null; // or <LoadingSpinner />

  if (!user || valid === false) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
