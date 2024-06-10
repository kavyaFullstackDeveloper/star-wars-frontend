import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { setUser } from '../slices/userSlice';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signin', { email, password });
      dispatch(setUser({ token: response.data.token }));
      navigate('/characters');
    } catch (error) {
      console.error('Error signing in', error);
      // Optionally display an error message to the user here
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Form className="w-full max-w-sm" onFinish={handleSubmit}>
        <Form.Item>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to="/signup" className="text-blue-500">Don't have an account? Sign Up</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
