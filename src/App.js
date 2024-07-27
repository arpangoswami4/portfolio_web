import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white relative min-h-screen flex flex-col">
      <Navbar />
      <section className="z-0">
        <Layout />
      </section>
      <Footer/>
    </div>
  );
}

export default App;
