import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { useState } from "react";
import axios from "axios";
import Nav from "../component/Nav";
import { useNavigate } from "react-router-dom";

// import * as EmailValidator from 'email-validator';
// import { useNavigate } from "react-router-dom";

type signup = {
  id:string,
  name:string,
  email:string,
  password:string,
  

}

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const nav = useNavigate()

    const valid = async () => {
      const res = await fetch("https://64f19d680e1e60602d240795.mockapi.io/Tweets")
      
      const data = await res.json()
      const isLogin = data.some((e: signup) => {
        return e.email === email && e.password === password 
      })
      localStorage.setItem("islogin", isLogin)
      if (isLogin){
        nav("/Student")
      } if(!isLogin){
        nav("/")
      }else {
        alert("no")
      }
    }
  return (
    <>
      <Nav lable="Home" path="/"></Nav>
      <div className="flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-gray-700 font-bold p-3 flex justify-center mt-8 text-center md:text-4lg ">
Log In</h1>
           <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form> 
      {/* <!--E-mail input--> */}
      <TEInput
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
  
          </TEInput>

      {/* <!--Password input--> */}
      <TEInput
            type="password"
            label="Password"
            className="mt-6 mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TEInput>

      {/* <!--Submit button--> */}
      
       
      <TERipple rippleColor="light" className="w-full">
            <button
              type="button"
              className="block w-full rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
              onClick={valid}
            >
              Log In
            </button>
          </TERipple>
       
       
      {/* <!--Register link--> */}
      <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
            Not a member?{" "}
            <a
              href="signup"
              className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
      </div>
     
      </>
    
  );
}
