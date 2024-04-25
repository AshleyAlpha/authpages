import React, { useState } from 'react';
import {Link} from "react-router-dom";
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, such as sending data to a server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="bg-green-300 border border-red-700  flex flex-col items-center justify-center p-36">
      <h2 className="text-center text-xl text-blue-600 mb-4">Logo Here</h2>
      <div className="bg-yellow-200 border border-blue-700 max-w-sm rounded p-8 flex flex-col items-center">
        <h2 className="text-center text-xl text-red-600 mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Email"
              required
              className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline bg-pink-300"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline bg-pink-300"
            />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="bg-blue-100 hover:bg-blue-300 text-blue-500 font-italic py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-blue-500">Don't have an account?</p> <Link to="/signUpForm"><p className="text-red-500">Sign up here</p></Link>
      </div>
    </div>
  );
}

export default LoginForm;
