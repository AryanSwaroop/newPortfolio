import { motion } from "framer-motion"


const logoVariant = {
    hidden : {
        
        pathLength : 0,
        opacity : 0,
        fill: "rgba(255, 255, 255, 0)"
    },

    visible : {
        
        pathLength : 1,
        opacity : 1,
        fill: "rgba(255, 255, 255, 1)",
        transition : {
            duration : 2 , 
            ease : "easeInOut"
        }
    }
}

const AryanLogo = () => {



    
    return(
        <div className="Logo">

        <svg className="LogoParts" fill="#000000"  height="800px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
          
        >
    
        <motion.path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"
         variants={logoVariant}
          initial = "hidden"
          animate = "visible"
        />
        </svg>

        /

        <svg className="LogoParts" fill="#000000" height="800px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
          
        >  
        <motion.path 
        d="M7.75 16.063l-7.688-7.688 3.719-3.594 11.063 11.094-11.344 11.313-3.5-3.469z"
        variants={logoVariant}
        initial = "hidden"
        animate = "visible"
        ></motion.path>
        </svg>

        </div>
    )
}

export default AryanLogo;