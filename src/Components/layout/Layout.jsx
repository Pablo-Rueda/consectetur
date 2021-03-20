import React from 'react';
import Header from "./header/Header"
import Footer from "./footer/Footer"

const Layout = (props) => {
    return ( 
        <div>
            <div className="layoutContainer">
                <div className="layoutContent">
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
     );
}
 
export default Layout;
