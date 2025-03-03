import React from "react";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function submitHandler(e){
        e.preventDefault()
        console.log("email is ", email)
        console.log("password is ", password)

        setEmail("")
        setPassword("")

    }

    
    
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>
        <form  onSubmit={(e)=>{
            submitHandler(e)
        }} className="flex flex-col space-y-4">
          <input 
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            value={email}
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-lg border border-gray-500 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border border-gray-500 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Login
          </button>
        </form>
        <p className="text-gray-300 text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
