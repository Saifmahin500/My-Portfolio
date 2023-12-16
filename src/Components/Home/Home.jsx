import About from "./About";
import Intro from "./Intro";
import MyProjects from "./MyProjects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <Skills></Skills>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;