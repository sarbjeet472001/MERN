import React from 'react'
import spic from '../images/WIN_20210130_20_48_44_Pro.jpg'


const Time = () => {
  return (
    <>
     <body className='b'>
    <section className='Aboutcard'>
      <div className='r1'>
        <div>
        <img className="sim" src={spic} alt="" />
        </div>
        <div>
          <div className='r1c2'>
            <div className='bdiv'>
            <h5>Simran Kaur</h5>
            <h6 className='text-primary'>Web Developer</h6>
            <p className='text-muted'>Rankings: 1/100</p>
            </div>
            <div className='btdiv'>
              <button className='btn btn-primary bg-secondary mt-3'>Edit Profile</button>
            </div>
          </div>
          <div>
            <ul >
              <li><a  href="#" >Timeline</a></li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
      <div className='r2' id='about'>
        <div className='aboud'>
           <h5 className='text-muted'>Work Link</h5>
          <ul className='ulr2'>
          <li className='li2'><a href='https://www.google.com/'>Youtube</a></li>
          <li className='li2'><a href='https://www.instagram.com/sarbjithanjra/'>Instagram</a></li>
          <li className='li2'><a href='https://www.google.com/'>Facebook</a></li>
          <li className='li2'><a href='https://www.google.com/'>Linkedin</a></li>
          <li className='li2'><a href='https://www.google.com/'>Github</a></li>
          </ul>
        </div>
        <div className='aboud2'>
        <ul className='ulr23'>
          <li className='li23'><b>Coding</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5hrs/day</b></span></li>
          <li className='li23'><b>Sports</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2hrs/day</b></span></li>
          <li className='li23'><b>Book Reading</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1hrs/day</b></span></li>
          <li className='li23'><b>Development</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3hrs/day</b></span></li>
          <li className='li23'><b>Listen Music</b><span className='text-primary'><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5hrs/day</b></span></li>
          </ul>
        </div>
      </div>
      
     </section>
    </body>
    </>
  )
}

export default Time
