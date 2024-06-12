import Gallery from "./Elements/gallery";
import Card from "./Elements/Card";
import SkillTable from "./Elements/skillTable";
import Title from "./tools/title";
import SocialTable from "./Elements/socialTable";
import Project from "./Elements/project";
import Footer from "./Elements/footer";
import Navbar from "./Elements/navbar";
import "./CSS/responsive.css";


function App() {
  return (
   <div>
   <Navbar/>
   <Gallery/>
   <Card/>
   <Title letters={"Tech Stack"} />
   <SkillTable/>
   <Title letters={"Socials"}/>
   <SocialTable/>
   <Title letters={"Projects"} />
   <Project/>
   <Footer/>
   </div>
  );
}

export default App;
