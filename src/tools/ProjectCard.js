export default function ProjectCard(props){
    return(
        
        <div className="projectsPage">

        <img src={props.source} className="cardImage"></img>
        <div>
        <h3 className="cardHeading">{props.Title}</h3>
        <p className="cardPara">{props.details}</p>
        </div>
        <button className="ProjectButton">Visit Project</button>

        </div>
    )
}