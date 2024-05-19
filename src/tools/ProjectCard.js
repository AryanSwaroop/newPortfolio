import {motion} from "framer-motion";

const ProjectCard = (props) => {
    return(
        
        <div className="projectsPage">

        <img src={props.source} className="cardImage"></img>
        <div>
        <h3 className="cardHeading">{props.Title}</h3>
        <p className="cardPara">{props.details}</p>
        </div>
        <motion.button className="ProjectButton" 
         animate = {
            {
                
             scale : [1.1,1,1.1,1,1.1,1,1.1],
             transition : { duration : 2 , repeat : Infinity }

            }

         }
        >
          Visit Project
        </motion.button>

        </div>
    )
}

export default ProjectCard;