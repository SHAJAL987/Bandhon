import React from 'react'
import Footer from '../others/Footer'
import NavBar from '../others/Navbar'

const LandingLayout = (props) => {
    return (
        <>
            <NavBar />
            <>
                <div style={{ marginTop: '60px' }}>
                    {props.children}
                </div>
            </>
            <Footer />
        </>
    )
}

export default LandingLayout