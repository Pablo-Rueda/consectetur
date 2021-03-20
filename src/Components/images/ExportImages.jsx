import React from 'react';
import images from "./images"

const ExportImages = (props) => {
    const style = {
        top: props.height ||"0px",
        padding: "0px", margin:"0px",
        bottom:"0px",
        height: props.height || "auto",
        width: props.width || "auto",
        borderRadius: props.borderRadius || "0%",
        boxShadow: props.boxShadow || "0px 0px 0px trasparent",
      };
    return ( 
        <img src={images[props.imgId]} alt={props.alt} style={style} />
    );
}
 
export default ExportImages;