import "../CSS/static.css";

export default function SmallSkillBox(prop){

    const imageSource = prop.src;
    const imageName = prop.name;
    
    return(
        <div className="smallSkillBox">
            <div className="skillFlow">
              <img src={imageSource} className="skillIcons"/>
              <h1 className="skillLabel">{imageName}</h1>
            </div>
         </div>
    )
}