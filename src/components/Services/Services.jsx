import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
const Services = () => {
    return (
        <div id='services' className='Services'>
            <div className="services-title">
                <h1>I miei Servizi</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="servises-container">
                {Services_Data.map((Services, index) => {
                    return <div key={index} className='services-format'>
                        <h3>{Services.s_no}</h3>
                        <h2>{Services.s_name}</h2>
                        <p>{Services.s_desc}</p>

                    </div>

                })}


            </div>
        </div>)

}

export default Services