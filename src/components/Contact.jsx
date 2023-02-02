import React from 'react'
import logo from '../images/phone.png'
import logoe from '../images/email.png'
import logol from '../images/loc.jpg'
import { useState, useEffect  } from 'react'

const Contact = () => {
  const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});
  const callAboutPage=async()=>{
    try{
      const res=await fetch('/contact',{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      })

      const data=await res.json();
      console.log(data)
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone})

      if(!(res.status)===200){
        const error=new Error(res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);

  const handleInputs=(e)=>{

    const name=e.target.name;
    const value=e.target.value;

    setUserData({...userData,[name]:value})
  }

  const contactForm=async(e)=>{
    e.preventDefault();
    const {name,email,phone,message}=userData;

    const res=await fetch('/contactus',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,message
      })
    });

    const data=await res.json();

    if(!data){
      console.log("message not send");
    }else{
      window.alert("message send successfully");
      setUserData({...userData,message:""});
    }
  }
  return (
    <>
    <body className=' b'>
      <section className='cardsec'>
        <div className='k'>
          <img className='ms-4' src={logo} alt="" srcset="" />
          <div>
           <span><h6>Phone</h6></span>
           <sup className='mt-3'>+910000000000</sup>
          </div>
        </div>
        <div className='k'>
        <img className='ms-4' src={logoe} alt="" srcset="" />
          <div>
           <span><h6>Email</h6></span>
           <sup className='mt-3'>simran@amazon.com</sup>
          </div>
        </div>
        <div className='k'>
        <img className='ms-4' src={logol} alt="" srcset="" />
          <div>
           <span><h6>Location</h6></span>
           <sup className='mt-3'>Karnal,Haryana</sup>
          </div>
        </div>
      </section>
      <section className='contcard'>
      <main className='contmain'>
      <h3 className='mb-3'>Get in touch</h3>
      <form method='POST' className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Name</label>
    <input type="text" name='name' onChange={handleInputs} className="form-control" id="validationCustom02" value={userData.name} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" name='email' onChange={handleInputs} value={userData.email} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Phone</label>
    <div className="input-group has-validation">
    <span className="input-group-text" id="inputGroupPrepend">Ph</span>
      <input type="text" name='phone' onChange={handleInputs}  value={userData.phone} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a Phone no.
      </div>
    </div>
  </div>
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea name='message' onChange={handleInputs} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="col-12">
    <button className="btn btn-primary bg-success" onClick={contactForm} type="submit">Submit form</button>
  </div>
</form>
      </main>
      </section>
    </body>
    </>
  )
}

export default Contact
