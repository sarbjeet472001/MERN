import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const history=useNavigate();
  const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});
  let name,value;

  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value})
  }
  const postData=async(e)=>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword}=user

    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    })

    const data= await res.json();
    if(res.status ===422 || !data){
      window.alert("invalid Registeration")
      console.log("invalid Registeration")
    }else{
      window.alert("Registeration Successful")
      console.log("Registeration Successful")
      history('/Login')
    }
  }
  return (
    <>
    <body className="text-center b">
    <h1 className="h3 mb-3 fw-normal mt-1"><b>Create a new account</b></h1>
    <section className='card'>
    <main className="form-signin mainc">
      <form method='POST'>
        
        <div className="form-floating">
          <input type="text" name="name" value={user.name} onChange={handleInputs} className="form-control" id="name" placeholder="name"/>
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mt-1">
          <input type="email" name="email" value={user.email} onChange={handleInputs} className="form-control" id="email" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-1">
          <input type="tel" name="phone" value={user.phone} onChange={handleInputs} className="form-control" id="phone" placeholder="tel"/>
          <label for="floatingInput">Phone</label>
        </div>
        <div className="form-floating mt-1">
          <input type="text" name="work" value={user.work} onChange={handleInputs} className="form-control" id="work" placeholder="name"/>
          <label for="floatingInput">Occupation</label>
        </div>
        <div className="form-floating mt-1">
          <input type="password" name="password" value={user.password} onChange={handleInputs} className="form-control" id="p" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-1">
          <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} className="form-control" id="cp" placeholder="Password"/>
          <label for="floatingPassword">Confirm Password</label>
        </div>
        <div className="checkbox mb-3">
          
        </div>
        <button className="w-100 btn btn-lg btn-primary bg-success" type="submit" onClick={postData}>Sign in</button>
      </form>
    </main>
    
    </section>
    </body>
    </>
  )
}

export default Signup
