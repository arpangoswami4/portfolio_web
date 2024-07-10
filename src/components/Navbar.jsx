import NavbarItems from "./NavbarItems";


const Navbar = () =>{
  const items = ["Home", "Testimonial", "About"]
  return (
    <header className="sm:px-36 z-10 shadow-lg py-4 bg-secondary text-white flex sm:flex-row sm:gap-[700px] ">
      <h2 className="text-2xl">Portfolio</h2>
      <NavbarItems items={items}></NavbarItems>
    </header>
  );
}

export default Navbar;