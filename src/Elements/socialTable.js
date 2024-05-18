import SmallSkillBox from "../tools/SmallSkillBox";
import BigSkillBox from "../tools/BigSkillBox";
import "../CSS/static.css";

export default function SocialTable(){
    return(
        <div className="skillBox">

<div className="subSkill">
 
    <SmallSkillBox name="Insta" src="icons/instagram.svg"/>
    <SmallSkillBox name="Whatsap" src="icons/whatsapp.svg"/>
    
</div>

 <div className="subSkill">

    <BigSkillBox name="Leet" src="icons/leetcode.svg"/>
    <BigSkillBox name="hRank" src="icons/hackerrank.svg"/>

 </div>

 <div className="subSkill">

     <BigSkillBox name="LinkedIn" src="icons/linkedin.svg"/>
     <BigSkillBox name="Git" src="icons/github.svg"/>

 </div>

</div>
        
    )
}