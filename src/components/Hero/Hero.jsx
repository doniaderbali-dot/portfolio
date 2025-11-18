import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Sono Donia Derbali,</span> Frontend Developer </h1>
            <p> sono Frontend Developer in italia </p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero