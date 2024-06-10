import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import { setUser } from '../slices/userSlice';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', { username, email, password });
      dispatch(setUser({ token: response.data.token }));
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Form className="w-full max-w-sm" onFinish={handleSubmit}>
        <Form.Item>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
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
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item>
          <Link to="/signin" className="text-blue-500">Already have an account? Sign In</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
