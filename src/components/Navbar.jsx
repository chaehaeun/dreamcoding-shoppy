import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { useAuth } from "./context/AuthContext";
import User from "./User";
import Button from "./ui/Button";

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <header className="flex justify-between p-2 border-b border-gray-300">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login}>Login</Button>}
        {user && <Button onClick={logout}>Logout</Button>}
      </nav>
    </header>
  );
};

export default Navbar;
