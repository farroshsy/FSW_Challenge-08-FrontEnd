import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import { Container, Form, Button } from 'react-bootstrap';
import { Navigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { loginViaForm, loginWithGoogle } from '../../redux/actions/authActions.js';
/// redux/actions/authActions
function FormLogin() {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please enter your email',
        showConfirmButton: false,
        timer: 1000,
      });
    }
    if (password === '') {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Password cannot be empty',
        showConfirmButton: false,
        timer: 1000,
      });
    }
    if (email !== '' && password !== '') {
      dispatch(loginViaForm({ email, password }));
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginWithGoogle(tokenResponse.access_token));
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <> 
      {!isAuthenticated ? (

        <Container className="card-body-form">
          <Form className="" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <Form.Group className="my-3">
              <label className="labelLogin">Email</label>
              <Form.Control type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="my-3">
              <label className="labelLogin">Password</label>
              <Form.Control type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <p className="sign-up text-right">
              Don't have an Account?
              {' '}
              <Link as={Link} to="/register">Sign Up?</Link>
            </p>
            <Button type="submit" className="col-12 border-0 btn-form mt-3">
              Sign in
            </Button>
          </Form>
          <Button type="button" onClick={() => googleLogin()} className="col-12 border-0 btn-form mt-2">
            <i className="bi bi-google me-2" />
            Sign in with Google
          </Button>
          <p className="text-center mt-2">
            <Link as={Link} to="/">Back To Home</Link>
          </p>
        </Container>

      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default FormLogin;
