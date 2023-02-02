import React from 'react'
import { useState,useEffect } from 'react'


const Home = () => {
  const [userName,setUserName]=useState({});
  const [show,setShow]=useState(false)

  const callHomePage=async()=>{
    try{
      const res=await fetch('/contact',{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      })

      const data=await res.json();
      console.log(data)
      setUserName(data)
      setShow(true)
      
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    callHomePage();
  },[]);

  return (
    <>
    <div className='homehalf'>
    <div className='hc'>
      <p><b className='text-primary'>WELCOME</b></p>
      <h1>{userName.name}</h1>
      <h3>{show?'Happy,to see you back':'We Are The MERN'}</h3>
      <h3>{show?'':'Developer'}</h3>
    </div>
    </div>
     
    </>
  )
}

export default Home
