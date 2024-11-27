
import { useEffect, useRef, useState } from "react";
import ContriCard from "../tools/contributeCard";
import { motion } from "framer-motion";

export default function Contributions(){

    useEffect(() => {
        const cards = document.getElementsByClassName("ContriPage");

        for(let i = 0; i < cards.length ; i++){
            cards[i].style.left = `${i*86}%`;
        }
    },[])

    const [counter,setCounter] = useState(0);

    const rotator = () => {
        
        const cards = document.getElementsByClassName("ContriPage");
    
        for(let i = 0; i < cards.length ; i++){
    
            cards[i].style.transform = `translateX(${-counter*123}%)`;
            
            }
        }

    const right = () => {
    
        if(counter >= 3) {
            {rotator()}
            return;
        }

        setCounter((prevCounter) => prevCounter + 1);
        {rotator()}
        
    }

    const left = () => {

        if(counter == 0){
            {rotator()}
            return;
        }
        
        setCounter((prevCounter) => prevCounter - 1);
        {rotator()}

    }

    const sourceArray = [
        "gallery/appwrite.png",
        "gallery/ecell.png",
        "gallery/CompilerExplorer.png",
        "gallery/strapi.png"
    ];

    const TitleArray = [
        "Appwrite" ,
        "Ecell",
        "Compiler Explorer",
        "Strapi"
    ];

    const detailsArray = [
        "Appwrite is an open-source backend platform for building web, mobile, and Flutter apps.",
        "E-Cell DTU is a student-run organization at Delhi Technological University dedicated to business.",
        "Compiler Explorer is an interactive tool that lets you type code in one window and see the results.",
        "Strapi is a headless CMS that simplifies content creation and delivery to various digital platforms."
    ];

    const linkArray = [
        "https://appwrite.io/",
        "https://www.ecelldtu.in/",
        "https://godbolt.org/",
        "https://strapi.io/"
    ]

    //overflow issue : https://stackoverflow.com/questions/46046099/overflow-hidden-hiding-all-content

    return (
        
        <div id="contributionsSection">

        <div className="arrowCage">
        
        <button onClick={left} className="cardButton">
          <motion.img className="leftArrow" src="icons/left.svg"  whileHover ={{scale : 3}} whileInView={{ scale: 2 }}/>
        </button>
        <button onClick={right} className="cardButton">
          <motion.img className="rightArrow" src="icons/right.svg" whileHover={ { scale : 3}} whileInView={{ scale: 2 }}/>
        </button>
        </div>
        
        <div className="projectBundle">
        <ContriCard 
        source= {sourceArray[0]}
        Title= {TitleArray[0]}
        details= {detailsArray[0]}
        link = {linkArray[0]}
        />
        
        <ContriCard 
        source= {sourceArray[1]}
        Title= {TitleArray[1]}
        details= {detailsArray[1]}
        link = {linkArray[1]}
        />

        <ContriCard 
        source= {sourceArray[2]}
        Title= {TitleArray[2]}
        details= {detailsArray[2]}
        link = {linkArray[2]}
        />

        <ContriCard 
        source= {sourceArray[3]}
        Title= {TitleArray[3]}
        details= {detailsArray[3]}
        link = {linkArray[3]}
        />

  </div>
  </div>
    )

}
