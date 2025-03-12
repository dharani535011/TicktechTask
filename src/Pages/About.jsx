import React, { useContext } from 'react'
import b1 from "../../public/b1.png"
import b2 from "../../public/b2.png"
import b3 from "../../public/b3.png"
import b4 from "../../public/b4.png"
import b11 from "../../public/b11.png"
import b22 from "../../public/b22.png"
import b33 from "../../public/b33.png"
import b44 from "../../public/b44.png"
import hand from "../../public/hand.png"
import { Contextprovider } from '../Components/Othercontext'

const About = () => {
    const {Suns}=useContext(Contextprovider)
    const [Sun,setsun]=Suns
  return (
<>
<div className='about' style={{boxShadow: Sun === "sun" ? "0 0 0 10px rgb(21,21,21)" : "0 0 0 10px white"}}>
        <img className='b1' src={`${Sun=="moon"?b1:b11}`} alt="img" />
        <img className='b2' src={`${Sun=="moon"?b2:b22}`} alt="img" />
        <img className='b3' src={`${Sun=="moon"?b3:b33}`} alt="img" />
        <img className='b4' src={`${Sun=="moon"?b4:b44}`} alt="img" />
        <img className='hand' src={hand} alt="img" />
        <div className='aboutbody'>
        <span className='headl'>
           <h1><p className='p'>T</p>{`his is it. ;)`}</h1>
           <p className='tl' style={{backgroundColor:Sun=="moon"?"black":"white"}}></p>
        </span>
        <div className='para'>
        <p>Anish Kr. Sinha is an Indian <b>UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and fuctional user experiences. Typically, he's Driven & permanently Curious. He's obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.</p>
        <p style={{marginTop:"-20px"}}>He holds a <b>bachelor degree in Computer Applications</b>. During his graduation, he has been actively involved in the web design community for the last 3 years, he has designed websites for small businesses, events, nonprofits and more. Currently he's based in Bihar, <b>India</b>. Where he's working as an independent creative.</p>
        <p>His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <b>3D floor plan.</b></p>
        <p>When he's not designing, he's probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
       
        </div>
         <p className='bl' style={{backgroundColor:Sun=="moon"?"black":"white"}}></p>
        </div>
  
    </div>
    <div className='ex'>

    </div>
</>
  )
}

export default About