import "../CSS/static.css";
import { motion } from "framer-motion";

export default function BigSkillBox(prop){

  

    const imageSource = prop.src;
    const imageName = prop.name;

    return (
        <motion.div className="bigSkillBox"
        
              whileHover={{ scale: 1.2 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
        >

            <div className="skillFlow">
              <img src={imageSource} className="skillIcons bigSkillIconsAdjust" />
              <h1 className="skillLabel bigSkillLabelAdjust"> {imageName} </h1>
            </div>

         </motion.div>
    )
}