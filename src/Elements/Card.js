import "../CSS/static.css";
import { motion } from "framer-motion";


export default function Card(){
    return (
        <div className="fullPiece">

        <div className="smallPiece">

        <span className="flexApplier">
         <img src="icons/tick.svg" className="tickIcon" />
         <h1 className="skillname">DSA</h1>
        </span>
        
        <span className="flexApplier">
         <img src="icons/tick.svg" className="tickIcon" />
         <h1 className="skillname">DEV</h1>
        </span>

         <span className="flexApplier">
         <img src="icons/tick.svg" className="tickIcon" />
         <h1 className="skillname">ML</h1>
        </span>

        </div>

        <div className="bigPiece">

        <div className="leftPiece">
        <img src="pics/aryan.png" className="cardPhoto"/>
        <motion.button 
        className="CVDownloader"
        whileHover={{scale : 1.2}}
        >
            <img src="icons/download.svg" className="DownloadButton"></img>
            <h3 className="cvText">CV</h3>
        </motion.button>
        </div>

        <div className="DetailsBlock">

        <h1 className="cardName">Aryan Swaroop</h1>
            
            <div className="educationDetails">
            
            <div className="educationNaming">
            <img src="icons/education.svg" className="degreeIcon"/>
            <h3 className="nameOfCollege">D.T.U</h3>
            </div>

            <div className="educationNaming">
            <img src="icons/diploma.svg" className="degreeIcon"/>
            <h3 className="nameOfCollege">B.Tech</h3>
            </div>

            </div>

        </div>

        </div>

        </div>
    )
}