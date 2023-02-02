import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

  const {state,dispatch} = useContext(UserContext);

  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const logdata=async(e)=>{
    e.preventDefault();
    
    const res=await fetch("/login",{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    });

    const data= await res.json();
    if(res.status === 400 || !data){
      window.alert("invalid Credentials")
      console.log("invalid Credentials")
    }else{
      dispatch({type:'USER',payload:true})
      window.alert("Login Successful")
      console.log("Login Successful")
      history('/')
    }
  }
  return (
    <>
     <body className="text-center b">
     <h1 className="h3 mb-3 fw-normal th"><b>Log in</b></h1>
    <section className='card cardk'>
    <main className="form-signin maink">
      <form method='POST'>
      
    
        <div className="form-floating mt-1">
          <input type="email" className="form-control" id="floatingInput" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-1">
          <input type="password" className="form-control" id="floatingPassword" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          
        </div>
        <button className="w-100 btn btn-lg btn-primary bg-success" onClick={logdata} type="submit">Log in</button>
        <p className="mt-5 mb-3 text-muted"></p>
      </form>
    </main>
    
    
        
    </section>
    
      
    
    </body>
    </>
  )
}

export default Login
