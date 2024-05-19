import "../CSS/static.css";
import { motion } from "framer-motion";

export default function SmallSkillBox(prop){

    const imageSource = prop.src;
    const imageName = prop.name;
    
    return(
        <motion.div className="smallSkillBox"
        
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              >
            <div className="skillFlow">
              <img src={imageSource} className="skillIcons"/>
              <h1 className="skillLabel">{imageName}</h1>
            </div>
         </motion.div>
    )
}