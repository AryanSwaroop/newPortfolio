import { useEffect, useState } from "react";
import "../CSS/static.css";

export default function Gallery(){

    let n = 0;

    const image = document.getElementsByClassName("galleryPhotos");


    useEffect(() => {
        const imageRotator = () => {

            if(image[0] != undefined) {
    
                
                for( let i = 0; i < image.length; i++){
                        
    
                    image[i].style = "display:none";
    
                    }
                    
                    n++;
    
                    if(n > image.length){
                        n = 1;
                    }
    
                    
                    image[n-1].style = "display:block";
    
                    setTimeout(imageRotator , 3000);
            }  
    
        } 
        
    {imageRotator()}
    
    },[image]);
    



    return (
        <div className="Gallery">
        <img src="gallery/pic1.jpg" className="galleryPhotos" id="pic1"/>
        <img src="gallery/pic2.jpg" className="galleryPhotos" id="pic2"/>
        <img src="gallery/pic3.jpg" className="galleryPhotos" id="pic3"/>
        </div>
    );
}