import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Developers from "./components/developers/Developers";
import Footer from "./components/Footer";
const HomePage = () => {
  return <div>
   <BrowserRouter>
    <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/developers" element={<Developers/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </div>;
};

export default HomePage;
