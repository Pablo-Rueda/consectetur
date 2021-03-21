import React, {useState} from 'react';
import {ExportImages} from "./../../index"
const Header = () => {
    const [navContent, setNavContent] = useState({active:false,style:{top:"-100vh"}}); // un poco de estilo de componente para la animación

    const handleOnClick = () => { // función para abrir menú
        setNavContent(navContent.active? {active:false,style:{top:"-100vh"}} : {active:true,style:{top:"100px"}})
    }

    return ( 
        <div className="headerBar"> 
            <div className="generalContainer flexRow barContent">
                <div>
                    <ExportImages 
                        imgId={"logo"} 
                        height={"75px"}
                    />
                </div>
                <div className="flexCol text">
                    <p>Test Netberry Solutions</p>
                    <h3>Pablo Rueda</h3>
                </div>
                <button className="hmgButton" onClick={()=>{handleOnClick()}}>
                    <ExportImages 
                            imgId={"bars"} 
                            height={"40px"}
                        />
                </button>
            </div>
            <div className="headerOpen" style={navContent.style}>
                <div className="flexCol menu">
                    <a href="./"><h1> Cards</h1></a>
                    <a href="carrousel"><h1> Carrousel</h1></a>
                    <a href="./information"><h1> Information</h1></a>
                </div>
            </div>
         </div>
     );
}
 
export default Header;
