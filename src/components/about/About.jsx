import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div className='about'>
            <div id='about' className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile_img} alt="" /></div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Sono una sviluppatrice  esperta, con una profonda passione per lo svillupo lato server, l’interfaccia utente e l’esperienza di navigazione. Per me lo sviluppo  non è solo scrivere codice, ma trasformare idee in esperienze visive intuitive, fluide e coinvolgenti </p>
                        <p>Amo curare ogni dettaglio, dal design responsive alle animazioni, fino all’ottimizzazione delle performance e alla permanenza dei dati, perché credo che una web app ben realizzata possa davvero fare la differenza.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Tailwind</p><hr style={{ width: "40%" }} /></div>

                        <div className="about-skill"><p>HTML $ CSS </p><hr style={{ width: "50%" }} /></div>

                        <div className="about-skill"><p>React JS $ TypeScript </p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Express $ Node.js </p><hr style={{ width: "70%" }} /></div>

                        <div className="about-skill"><p>JavaScript </p><hr style={{ width: "60%" }} /></div>

                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>Anni Di Esperienza</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Progetti</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Clients</p>
                </div>

            </div>

        </div>



    )
}

export default About;