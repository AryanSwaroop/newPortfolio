
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../tools/ProjectCard";

export default function Project(){

    useEffect(() => {
        const cards = document.getElementsByClassName("projectsPage");

    
        for(let i = 0; i < cards.length ; i++){
            cards[i].style.left = `${i*86}%`;
        }
    })

    var [counter,setCounter] = useState(0);

    const rotator = () => {
        
        const cards = document.getElementsByClassName("projectsPage");
    
        console.log(counter);
        for(let i = 0; i < cards.length ; i++){
    
            cards[i].style.transform = `translateX(${-counter*123 }%)`;
            
            


            }
        }

        
    


    const right = () => {
    
        if(counter >= 2) {
            {rotator()}
            return;
        }

        setCounter(counter ++);
        {rotator()}
        
    }

    const left = () => {
        if(counter == 0){
            
            {rotator()}
            return;
        }
        
        setCounter(counter --);
        {rotator()}

    }

    const sourceArray = [
        "projects/ecommerce.png",
        "projects/ecommerce.png",
        "projects/Sponxer.png"
    ];

    const TitleArray = [
        "Ecommerce" ,
        "Ecommerce" ,
        "Landing Page"
    ];

    const detailsArray = [
        "A fully functional ecommerce website with different tools like uploading product, live product gallery etc.",
        "A fully functional ecommerce website with different tools like uploading product, live product gallery etc.",
        "A fully functional Landing website with different tools like redirect to different forms and managing data."
    ];



    //overflow issue : https://stackoverflow.com/questions/46046099/overflow-hidden-hiding-all-content

    return (
        
        <div >

        <div className="arrowCage">
        
        <button onClick={left} className="cardButton">
        <img className="leftArrow" src="icons/left.svg"  />
        </button>
        <button onClick={right} className="cardButton">
        <img className="rightArrow" src="icons/right.svg"  />
        </button>
        </div>
        
        <div className="projectBundle">
        <ProjectCard 
        source= {sourceArray[0]}
        Title= {TitleArray[0]}
        details= {detailsArray[0]}
        />
        
        <ProjectCard 
        source= {sourceArray[1]}
        Title= {TitleArray[1]}
        details= {detailsArray[1]}
        />

        <ProjectCard 
        source= {sourceArray[2]}
        Title= {TitleArray[2]}
        details= {detailsArray[2]}
        />
  </div>
        </div>
    )

}
