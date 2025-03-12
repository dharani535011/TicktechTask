import React, { useState } from 'react'
import logo from "../../public/Logo.svg"
import moon from "../../public/Moon.png"
import sun from "../../public/Sun.png"

const Nav = () => {
    const [Sun,setsun]=useState("moon")
    const [bar,setbar]=useState(false)
    return (
        <div className='nav-container'>
            <div className='nav-body'>
                <div className='sidebar' style={{right:bar?"0px":"-500px",backgroundColor:Sun=="sun"?"rgb(115,115,115)":"rgba(255, 245, 0, 0.5)",color:Sun=="sun"?"white":"black"}}>
                   <div className='sidebar-op'>
                     <p style={{backgroundColor:Sun=="sun"?"white":"black"}} className='bar'></p>
                     <p>Home</p>
                     <p>About</p>
                     <p>Resume</p>
                     <p>Skills</p>
                     <p>Projects</p>
                     <p>Contact</p>
                   </div>
                </div>
                <div className='head'>
                    <img src={logo} alt="logo" />
                    <h1>ANISH KUMAR SINHA</h1>
                </div>
                <div className='nav-option'>
                <ul>
                <li className='l'>Home</li>
                <li className='l'>About</li>
                <li className='l'>Resume</li>
                <li className='l'>Skills</li>
                <li className='l'>Projects</li>
                <li className='l'>Contact</li>
                <li className='il'>
                    <img style={{right:Sun=="moon"?"0px":"-200px"}} src={moon} alt="logo" onClick={()=>{
                        setsun("sun")
                    }} />
                    <img style={{top:Sun=="sun"?"0px":"-500px"}} src={sun} alt="logo"  onClick={()=>{
                        setsun("moon")
                    }}/>
                </li>
                <li className='hamburger' onClick={()=>setbar(!bar)}>
                    <p style={{transform:bar?"rotate(-45deg)":"none",top:bar?"0":"2px",backgroundColor:Sun=="sun"?"white":"black"}}></p>
                    <p style={{transform:bar?"rotate(45deg)":"none",bottom:bar?"":"2px",backgroundColor:Sun=="sun"?"white":"black"}}></p>
                </li>
               </ul>
               
                </div>

            </div>
        </div>
    )
}

export default Nav
// bottom:bar?"0":"2px"
// top:bar?"0":"2px"