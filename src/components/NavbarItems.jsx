const NavbarItems = ({ items }) => {
  return (
    <div className="flex flex-row gap-8 text-lg">
      {items.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default NavbarItems;
