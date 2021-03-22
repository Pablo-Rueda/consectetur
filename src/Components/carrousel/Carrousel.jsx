import React, {useState} from 'react';
import {ExportImages} from "./../index";



const Carrousel = () => {
    const [image,setImage] = useState([0,1,2]);
    const [animation,setAnimation] = useState(false);
    const [prevAni,setPrevAni] = useState(true);
    const slideImages = [ "platsBox01", "platsBox02", "platsBox03", "platsBox04", "platsBox05", "platsBox06" ]
    
    const handleClick = (prev) => {
        if(prev){
            setImage([
                (image[0]===5)?0:(image[0]+1),
                (image[1]===5)?0:(image[1]+1),
                (image[2]===5)?0:(image[2]+1),
            ]);
            setAnimation(true);
            setPrevAni(true)
        }else{
            setImage([
                (image[0]===0)?5:(image[0]-1),
                (image[1]===0)?5:(image[1]-1),
                (image[2]===0)?5:(image[2]-1),
            ])
            setAnimation(true);
            setPrevAni(false)
        }
    }



    return ( 
        <div className="carrouselContainer">
            <div className="arrows">
                <div className="arrowPrev" onClick={()=>{handleClick(true)}}>
                    <ExportImages 
                        imgId={"leftArrow"} 
                        height={"75px"} 
                        width={"auto"}
                        />
                </div>
                <div className="arrowNext" onClick={()=>{handleClick(false)}} >
                    <ExportImages 
                        imgId={"rightArrow"} 
                        height={"75px"} 
                        width={"auto"}
                        />
                </div>
            </div>
            
            <div className="flexRow spaceBetween slides">
                    <a href="/" 
                        className={(!animation)?("slideImgSides"):((prevAni)?("slideImgSides prevSlide"):("slideImgSides nextSlide"))}
                        onAnimationEnd={()=>{setAnimation(false)}}
                        >
                        <ExportImages 
                            imgId={slideImages[image[0]]} 
                            height={"100%"} 
                            width={"100%"}
                            boxShadow={"0px 1px 3px black"}
                            />
                    </a>
                    <a href="/" 
                        className={(!animation)?("slideImgCentral"):((prevAni)?("slideImgCentral prevSlide"):("slideImgCentral nextSlide"))}
                        onAnimationEnd={()=>{setAnimation(false)}}
                        >
                        <ExportImages 
                            imgId={slideImages[image[1]]} 
                            height={"100%"} 
                            width={"100%"}
                            boxShadow={"0px 1px 3px black"}
                            />
                    </a>
                    <a href="/" 
                        className={(!animation)?("slideImgSides"):((prevAni)?("slideImgSides prevSlide"):("slideImgSides nextSlide"))}
                        onAnimationEnd={()=>{setAnimation(false)}}
                        >
                        <ExportImages 
                            imgId={slideImages[image[2]]} 
                            height={"100%"} 
                            width={"100%"}
                            boxShadow={"0px 1px 3px black"}
                            />
                    </a>
            </div>
        </div>
     );
}
 
export default Carrousel;
