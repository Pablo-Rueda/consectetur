import React from 'react';
import {Carrousel} from "./../Components"
const CarrouselSection = () => {
    return ( 
        <section id="carrousel" className="carrouselBackground">
            <div className="generalContainer topSpace">
                <div className="alignCenter flexCol">
                    <h2>Consectetur</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum optio eligendi neque consequatur!</p>
                    <div className="line" />
                </div>
                <div className="topSpace" />
                <Carrousel />
            </div>
        </section>
    );
}
 
export default CarrouselSection;