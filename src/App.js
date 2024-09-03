import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="text-white relative min-h-screen flex flex-col">
      <Navbar />
      <section className="z-0">
        <Layout />
        {process.env.NODE_ENV === "production" &&
          location.pathname !== "/about" && (
            <p className="mb-3 w-2/3 m-auto text-center text-orange-600 text-sm">
              All the backend server functionality like contact form,
              testimonial submission and CV download might take some extra
              time(2-3 minutes) in production as the free tier of render.com is
              used which builds and runs the container from the codebase for
              every first request.
            </p>
          )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
