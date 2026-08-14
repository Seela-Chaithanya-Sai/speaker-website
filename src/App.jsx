import { Routes, Route } from
"react-router-dom";

import Navbar  from "./components/Navbar.jsx";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import BookMe from "./pages/BookMe";

function App() {
  return (
    <>
    <Navbar />
    
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-me" element={<BookMe />} />
      </Routes>
    </main>
    
    <Footer />
    </>

  );
}

export default App;