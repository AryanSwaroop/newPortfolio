import "../CSS/static.css";

export default function BigSkillBox(prop){

    const imageSource = prop.src;
    const imageName = prop.name;

    return (
        <div className="bigSkillBox">
            <div className="skillFlow">
            
              <img src={imageSource} className="skillIcons bigSkillIconsAdjust" />
              <h1 className="skillLabel bigSkillLabelAdjust"> {imageName} </h1>
            </div>
         </div>
    )
}