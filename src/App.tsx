import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Gallery from "./components/Gallery.tsx";
import Partners from "./components/Partners.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Partners />
            <Testimonials />
            <Footer />
        </main>
    );
}

export default App;