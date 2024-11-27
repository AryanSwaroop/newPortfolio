import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useRef } from "react";

export default function Navbar (){
    
    const [navMenu , setNavMenu] = useState(false);

    const handleClose = () => {
      setNavMenu(false);
    }

  const logo = useRef(null);
  const [angle, setAngle] = useState(0);

  const rotateMenu = () => {
    // const newAngle = angle + 90; // Rotate 45 degrees on each click
    // setAngle(newAngle);
    // logo.current.style.transform = `rotate(${newAngle}deg)`;
     setNavMenu(true);
  };

    return(

        <div className="Navbar">
        
        <h1 className="navbarText">DevPort</h1>
        
        <div className="menuLogoPair">

        {
        !navMenu
        &&
        <img ref={logo} src="icons/dotMenu.svg"  style={{width: "2rem"}} className="MenuOpenButton" onClick={rotateMenu}/>
        
        }
        
        { 

        navMenu && 

        <div className="navbarDiv">

        <RxCross1 style={{color: "white"}} className="crossLogo" onClick={handleClose} />
        
        <a href = "/#projectsSection">
           <h1 className="navbarTextNavigate">Projects</h1>
        </a>

        <a href = "/#skillSection">
         <div className="textWrap">
           <h1 className="navbarTextNavigate">Skills</h1>
         </div>
         </a>
         
        <a href = "/#socialSection">
         <div className="textWrap">
           <h1 className="navbarTextNavigate">Socials</h1>
         </div>
         </a>

        <a href = "/#contactSection">
         <div className="textWrap">
           <h1 className="navbarTextNavigate">Contact</h1>
         </div>
         </a>

         <a href = "/#contributionsSection">
         <div className="textWrap">
           <h1 className="navbarTextNavigate">Contributions</h1>
         </div>
         </a>

        </div>
        
        }

        </div>

        </div>
        
    );
}