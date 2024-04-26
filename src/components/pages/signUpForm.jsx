import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    navigate(`/home`);
  };

  return (
    <div className="bg-green-300 border-red-700 min-h-screen flex justify-center items-center p-36">
      <div className="bg-yellow-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-italic mb-4 text-red-500">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="border-blue-500 border-2 rounded-lg px-4 py-2 w-full bg-pink-300 placeholder-pink-600::placeholder"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border-blue-500 border-2 rounded-lg px-4 py-2 w-full bg-pink-300 placeholder-pink-600::placeholder"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="border-blue-500 border-2 rounded-lg px-4 py-2 w-full bg-pink-300 placeholder-pink-600::placeholder"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-blue-300 font-italic py-2 px-4 rounded-lg w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
