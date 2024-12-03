import { useState } from "react";
import { useRef } from "react";

export default function Navbar (){

  const[visible , setVisible] = useState(true);
    
  return(

    <div className="UpNavbar">

    {
      visible && 
      <div className="SmallNavbar" onClick={() => setVisible(false)}>
      <img src="icons/clickTouch.svg" className="ClickIcon"></img>
      </div>
    }




    { 
      !visible && 
        <div className="Navbar"> 
        <img src="icons/cross.svg" onClick={()=>setVisible(true)} className="crossIcon"></img>
        <div className="subNavbar" ><a href="/#skillSection">Stack</a></div>
        <h1 className="MenuDivider">|</h1>
        <div className="subNavbar"><a href="/#socialSection">Social</a></div>
        <h1 className="MenuDivider">|</h1>
        <div className="subNavbar"><a href="/#projectsSection">Project</a></div>
        <h1 className="MenuDivider">|</h1>
        <div className="subNavbar"><a href="/#contributionsSection">Contri</a></div>
        </div>

    }
    </div>
        
    );
}