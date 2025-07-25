import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import LightRays from '../../ReactBits/LightRays/LightRays';
import '../../ReactBits/LightRays/LightRays.css'; // Import styles for LightRays
import ModelViewer from '../components/ModelViewer';
import '../styles/auth.css';

const AuthPage = () => {
  const [mode, setMode] = useState('login');

  return (
    <div className="auth-page">
      <LightRays className="light-rays-bg" color="#8F6A35" />

      <div className="auth-container">
        <div className="auth-left">
          <ModelViewer />
        </div>
        <div className="auth-right">
          <div className="form-box">
            <h2>{mode === 'login' ? 'Login to NOIRÉ' : 'Create your NOIRÉ Account'}</h2>
            <AuthForm mode={mode} />
            <p
              className="toggle-mode"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if(e.key === 'Enter') setMode(mode === 'login' ? 'signup' : 'login'); }}
            >
              {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Login'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
