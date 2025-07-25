import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser, registerUser } from '../api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthForm = ({ mode }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ correct position

  const onSubmit = async (data) => {
    try {
      if (mode === 'login') {
        const res = await loginUser({
          email: data.email,
          password: data.password,
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        toast.success('Login successful ✨');
        setUser(res.data.user);
        navigate('/'); // ✅ redirect after login
      } else {
        const res = await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        toast.success('Signup successful ✨');
        setUser(res.data.user);
        navigate('/auth');
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      {mode === 'signup' && (
        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Your Name"
        />
      )}
      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="Email Address"
      />
      <input
        type="password"
        {...register('password', { required: true })}
        placeholder="Password"
      />
      <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
    </form>
  );
};

export default AuthForm;
