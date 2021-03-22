import React from 'react';
import {ExportImages} from "./../Components"


const InfoSection = () => {
    return ( 
        <section id="info">
            <div className="generalContainer topSpace">
                <div className="alignCenter flexCol">
                    <h2>Bibendum Posuere</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum optio eligendi neque consequatur!</p>
                    <div className="line" />
                </div>
                <div className="topSpace" />
                <div className="infoSec">
                    <div className="infoBackSquare" />
                    <div className="infoContent">
                        <div className="infoText">
                            <h1>Mauris purus felis</h1>
                            <ul>
                                <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat consequuntur dolor praesentium deleniti nihil natus nesciunt quia sapiente incidunt!</span></li>
                                <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat consequuntur dolor praesentium deleniti nihil natus nesciunt quia sapiente incidunt!</span></li>
                                <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat consequuntur dolor praesentium deleniti nihil natus nesciunt quia sapiente incidunt!</span></li>
                                <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat consequuntur dolor praesentium deleniti nihil natus nesciunt quia sapiente incidunt!</span></li>
                                <li><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat consequuntur dolor praesentium deleniti nihil natus nesciunt quia sapiente incidunt!</span></li>
                            </ul>
                            <div className="tagContainer" >
                                <ExportImages 
                                    imgId={"doc"} 
                                    height={"60px"}  
                                    width={"60px"}
                                    borderRadius={"60px"} />
                                <div className="infoTag">Proin vitae fringilla lectus ac vulputate risus nec</div> 
                            </div>
                        </div>
                    </div>
                    <div className="infoImage">
                        <ExportImages 
                        imgId={"shop"} 
                        height={"100%"} 
                        width={"100%"} 
                        boxShadow={"0px 1px 3px black"}
                        />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default InfoSection;