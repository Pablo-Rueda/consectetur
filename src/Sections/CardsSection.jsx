import React from 'react';
import {Card} from "./../Components"
const CardsSection = () => {
    return (  
        <section id="cards" className="generalContainer">
            <div className="topSpace" />
            <div className="alignCenter flexCol">
                <h2>Consectetur</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum optio eligendi neque consequatur!</p>
                <div className="line" />
            </div>
            <div className="rowToCol--tab spaceBetween topSpace">
                <Card imgId={"plant"} tag={"Tag 1"} title={"Lorem Ipsum"} link={"/"}> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione odit natus voluptas odio officiis ipsam corrupti ipsa commodi fugit.
                </Card>
                <Card imgId={"house"} tag={"Tag 2"} title={"Lorem Ipsum"} link={"/"}> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione odit natus voluptas odio officiis ipsam corrupti ipsa commodi fugit.
                </Card>                
                <Card imgId={"cactus"} tag={"Tag 3"} title={"Lorem Ipsum"} link={"/"}> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione odit natus voluptas odio officiis ipsam corrupti ipsa commodi fugit.
                </Card>            
            </div>
        </section>   
    );
}
 
export default CardsSection;