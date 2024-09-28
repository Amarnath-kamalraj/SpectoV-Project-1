import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Problem from "./components/Problem/Problem";
import Goals from "./components/Goals/Goals";
import Solution from "./components/Solution/Solution";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Problem />
            <Goals />
            <Solution />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
