import "./App.css";
import Hero from "./Components/Hero";
import ValueProposition from "./Components/ValueProposition";
import Features from "./Components/Features";
import Industries from "./Components/Industries";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import ScrollToHash from "./Components/ScrollToHash";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Features />
      <Industries />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





