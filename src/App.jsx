import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Extra from "./components/Extra";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Preloader />
            <nav>
                <Navbar />
            </nav>
            <section>
                <Home />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Experience />
            </section>
            <section>
                <Skills />
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
