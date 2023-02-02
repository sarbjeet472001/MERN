import React from 'react'
import { useEffect } from 'react'
import pic from '../images/WIN_20210130_20_48_44_Pro.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ppic from "../images/OIP.jpg"

const About = () => {
  const navigate=useNavigate();
  const [userData,setUserData]=useState({});
  const callAboutPage=async()=>{
    try{
      const res=await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "content-type":"application/json"
        },
        credentials:"include"
      })

      const data=await res.json();
      console.log(data)
      setUserData(data)

      if(!(res.status)===200){
        const error=new Error(res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
      navigate('/login')
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);

  return (
    <>
    <body className='b'>
      <form method="GET" className='Aboutcard'>
      <div className='r1'>
        <div>
        <img className="sim" src={userData.name==="simarjeet"?pic:ppic} alt="" />
        </div>
        <div>
          <div className='r1c2'>
            <div className='bdiv'>
            <h5>{userData.name}</h5>
            <h6 className='text-primary'>{userData.work}</h6>
            <p className='text-muted'>Rankings: 1/100</p>
            </div>
            <div className='btdiv'>
              <button className='btn btn-primary bg-secondary mt-3'>Edit Profile</button>
            </div>
          </div>
          <div>
            <ul >
              <li className='text-secondary '><b>User Profile</b></li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className='r2' id='about'>
        <div className='aboud'>
          <ul className='ulr2'>
          <li className='li2'>Youtuber</li>
          <li className='li2'>Web Developer</li>
          <li className='li2'>Jee Advance Rank:1</li>
          <li className='li2'>Software Engineer</li>
          <li className='li2'>goldmadelist in physics olympiad</li>
          <li className='li2'>IITian</li>
          </ul>
        </div>
        <div className='aboud2'>
        <ul className='ulr23'>
          <li className='li23'><b>User id</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData._id}</b></span></li>
          <li className='li23'><b>Name</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.name}</b></span></li>
          <li className='li23'><b>Email</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.email}</b></span></li>
          <li className='li23'><b>Phone</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.phone}</b></span></li>
          <li className='li23'><b>Profession</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.work}</b></span></li>
          </ul>
        </div>
      </div>
      </form>
    
    </body>
     
    </>
  )
}

export default About
