import React, { useContext } from 'react'
import img from "../../public/Image.png"
import img2 from "../../public/img2.png"
import { Contextprovider } from './Othercontext'
import s from "../../public/ib.png"
import s2 from "../../public/kb.png"
import s3 from "../../public/lib.png"
import s4 from "../../public/twb.png"
import s5 from "../../public/tb.png"
import s6 from "../../public/fb.png"
import s7 from "../../public/gb.png"

const Homebackground = () => {
    const {Suns}=useContext(Contextprovider)
    const [Sun,setsun]=Suns
  return (
    <div className='HBC'>
        <div className='social'>
                 <img src={`${s6}`} alt="logo" />
                 <img className='ig' src={`${s}`} alt="logo" />
                 <img src={`${s4}`} alt="logo" />
                 <img src={`${s7}`} alt="logo" />
                 <img src={`${s3}`} alt="logo" />
                 <img src={`${s5}`} alt="logo" />
                 <img src={`${s2}`} alt="logo" />
        </div>
        <div className='mail'>
                 <p></p>
                 <p>sinhaanishkumar@outlook.com</p>
        </div>
        <div className='hbb'>
            <div className='hbb1'>
                <div className='hbody'>
                <button>Hello!</button>
                <h1>
                    <span>I'm</span>
                    <span>Anish</span>
                    <span>👋</span>
                </h1>
                <h3>
                    <span>UI/UX Designer,Front-End Developer & Thinker.</span>
                    <span>Based in India</span>
                </h3>
                </div>
                <div className='hbbutton'>
                    <button style={{boxShadow:Sun=="sun"?"0px 4px 10px rgba(255, 255, 255, 0.2)":"0px 4px 10px rgba(0, 0, 0, 0.2)"}}>Download CV</button>
                    <button style={{boxShadow:Sun=="sun"?"0px 4px 10px rgba(255, 255, 255, 0.2)":"0px 4px 10px rgba(0, 0, 0, 0.2)"}}>Get in Touch!</button>
                </div>
            </div >
            <div className='img'><img src={`${Sun=="sun"?img2:img}`} alt="img" /></div>
        </div>
    </div>
  )
}

export default Homebackground