import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
const Services = () => {
    return (
        <div className='Services'>
            <div className="services-title">
                <h1>Mio Servizio</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="servises-container">
                {Services_Data.map}


            </div>
        </div>
    )
}

export default Services