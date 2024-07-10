import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Testimonial from "./Testimonial";
import About from "./About";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/testimonial" element={<Testimonial/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
  );
};

export default Layout;
