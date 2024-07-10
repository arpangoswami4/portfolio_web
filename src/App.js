import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <section className="z-0">
        <Layout />
      </section>
    </div>
  );
}

export default App;
