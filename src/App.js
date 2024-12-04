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
   <span id="stacksHere"></span>
   <Title letters={"Tech Stack"} />
   <SkillTable/>
   <span id="socialHere"></span>
   <Title letters={"Socials"} />
   <SocialTable/>
   <span id="projectsHere"></span>
   <Title letters={"Projects"} />
   <Project/>
   <span id="contriHere"></span>
   <Title letters={"Contributes"} />
   <Contributions/>
   <Footer/>
   </div>
  );
}

export default App;
