import React from 'react'
import Header from '../components/Header/Header'
import elipse from '../assets/Ellipse 2.png'
import '../App.css'

function PageLayout({ children }) {
    return (

        < div className="App">
            <div className='max-width-wrapper'>
                <Header />
                {children}
            </div>
            <div className='elipse'>
                <img src={elipse} alt='an circle coloured with black and pink gradient' ></img>
            </div>
        </div>
    )
}

export default PageLayout