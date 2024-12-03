import Gallery from "./Elements/gallery";
import Card from "./Elements/Card";
import SkillTable from "./Elements/skillTable";
import Title from "./tools/title";
import SocialTable from "./Elements/socialTable";
import Project from "./Elements/project";
import Footer from "./Elements/footer";
import Navbar from "./Elements/navbar";
import Contributions from "./Elements/contribution";
import "./CSS/responsive.css";
import "./CSS/static.css";


function App() {
  return (
   <div>
   <Navbar/>
   <Gallery/>
   <Card/>
   <Title letters={"Tech Stack"} id="stacksHere"/>
   <SkillTable/>
   <Title letters={"Socials"} id="socialHere"/>
   <SocialTable/>
   <Title letters={"Projects"} id="projectsHere"/>
   <Project/>
   <Title letters={"Contributes"} id="contriHere"/>
   <Contributions/>
   <Footer/>
   </div>
  );
}

export default App;
