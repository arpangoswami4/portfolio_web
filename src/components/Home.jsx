import ContactForm from "./ContactForm";
import Introduction from "./Introduction";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Introduction />
      <ContactForm/>
    </div>
  );
};

export default Home;
