import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onAuthChange } from "../api/firebase";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthChange((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = async () => {
    const user = await login();
    setUser(user);
  };

  const handleLogout = async () => {
    const result = await logout();
    setUser(result);
  };

  return (
    <header className="flex justify-between p-2 border-b border-gray-300">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Navbar;
