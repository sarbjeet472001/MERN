import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

const Logout = () => {

    const {state,dispatch}=useContext(UserContext);
    const history=useNavigate();
    
      useEffect(()=>{
        fetch('/logout',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "content-type":"application/json"
        },
        credentials:"include"
        }).then((res)=>{
            dispatch({type:'USER',payload:false})
            history('/Login',{replace:true});
            if(!(res.status)===200){
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
      });
  return (
    <div>
      Logout
    </div>
  )
}

export default Logout
