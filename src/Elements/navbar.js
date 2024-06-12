import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";

export default function Navbar (){
    
    const [navMenu , setNavMenu] = useState(false);

    const handleOpenMenu =  () => {
        setNavMenu(true);
    }

    const handleClose = () => {
      setNavMenu(false);
    }

    return(

        <div className="Navbar">
        <h1 className="navbarText">AryanPFolio </h1>

        { !navMenu && 
        <MdMenuOpen  style={{color : "white" , height : "3rem", width: "3rem"}} className="MenuOpenButton" onClick={handleOpenMenu}/>
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
        </div>
        
        }

        </div>
        
    );
}