import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Techs from "./components/Techs";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Extra from "./components/Extra";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            {/* <Preloader /> */}
            <Navbar />
            <section id="one">
                <Home />
                {/* <Nav /> */}
                <About />
                <Skills />
                <Techs />
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <Extra />
            </section>
            <section>
                <Contact />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default App;
