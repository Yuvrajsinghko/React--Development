import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex h-screen justify-center gap-8 text-3xl text-amber-200">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>

      
      <Outlet />
    </div>
  );
};

export default Product;
