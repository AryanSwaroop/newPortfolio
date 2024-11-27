import SmallSkillBox from "../tools/SmallSkillBox";
import BigSkillBox from "../tools/BigSkillBox";
import "../CSS/static.css";
import { motion } from "framer-motion";

export default function SkillTable(){
    return (
        
        <div className="skillBox" id="skillSection">

        <div className="subSkill">
         
            <SmallSkillBox name="Java" src="icons/java.svg"/>
            <SmallSkillBox name="Python" src="icons/python.svg"/>
            <SmallSkillBox name="Next" src="icons/next.svg"/>
            <SmallSkillBox name="Golang" src="icons/golang.svg"/>
            
        </div>

         <div className="subSkill">

            <BigSkillBox name="React" src="icons/react.svg"/>
            <BigSkillBox name="Express" src="icons/express.svg"/>
            <SmallSkillBox name="LnChain" src="icons/langchain.svg"/>

         </div>

         <div className="subSkill">

             <BigSkillBox name="Jscript" src="icons/javascript.svg"/>
             <BigSkillBox name="Node" src="icons/node.svg"/>
             <SmallSkillBox name="WebRTC" src="icons/webrtc.svg"/>

         </div>

        </div>
        
    )
}