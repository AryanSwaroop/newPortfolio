import SmallSkillBox from "../tools/SmallSkillBox";
import BigSkillBox from "../tools/BigSkillBox";
import "../CSS/static.css";

export default function SocialTable(){
    return(
        <div className="skillBox" id = "socialSection">

<div className="subSkill">
    
    <a href="https://www.instagram.com/aryan_swaroop/">
    <SmallSkillBox name="Insta" src="icons/instagram.svg"/>
    </a>
    <a href="https://wa.me/918527665919">
    <SmallSkillBox name="Whatsap" src="icons/whatsapp.svg"/>
    </a>

</div>

 <div className="subSkill">

    <a>
    <BigSkillBox name="Leet" src="icons/leetcode.svg"/>
    </a>
    <a>
    <BigSkillBox name="hRank" src="icons/hackerrank.svg"/>
    </a>

 </div>

 <div className="subSkill">

     <a href="https://www.linkedin.com/in/aryan-swaroop/">
     <BigSkillBox name="LinkedIn" src="icons/linkedin.svg"/>
     </a>
     <a href="https://github.com/AryanSwaroop">
     <BigSkillBox name="Git" src="icons/github.svg"/>
     </a>

 </div>

</div>
        
    )
}