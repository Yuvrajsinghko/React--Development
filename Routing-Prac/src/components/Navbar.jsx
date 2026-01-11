import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-5 bg-cyan-500 px-8 justify-between text-3xl">
      <h2 className="font-medium">Rag</h2>
      <div className="flex gap-8">
        <Link className="font-bold" to="/">Home</Link>
        <Link className="font-bold" to="/about">About</Link>
        <Link className="font-bold" to="/product">Product</Link>
        <Link className="font-bold" to="/courses">Courses</Link>

      </div>
    </div>
  );
};

export default Navbar;
