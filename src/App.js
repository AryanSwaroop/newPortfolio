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
   <Title letters={"Tech Stack"}/>
   <SkillTable/>
   <Title letters={"Socials"}/>
   <SocialTable/>
   <Title letters={"Projects"}/>
   <Project/>
   <Title letters={"Contributes"}/>
   <Contributions/>
   <Footer/>
   </div>
  );
}

export default App;
