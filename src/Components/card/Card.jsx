import React from 'react';
import {ExportImages} from "./../index"
const Card = (props) => {
    return ( 
        <div className="cardContainer">
            <div className="cardContent">
                <div className="cardImg">
                    <ExportImages imgId={props.imgId} height={"auto"} width={"100%"} />
                </div>
                <div className="tag">
                    <p>{props.tag}</p>
                </div>
                <div className="cardText">
                    <h4> {props.title}</h4>
                    <p>{props.children}</p>
                </div>
            </div>
            <div className="cardButtonContainer">
                <a href={props.link}>
                    <button className="cardButton">
                    Sit Amet
                    </button>
                </a>
            </div>
        </div>
     );
}
 
export default Card;
