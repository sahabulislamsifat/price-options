import { useState } from "react";
import Links from "../Links/Links";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:id", name: "Profile" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <div
          className="md:hidden  bg-blue-400 p-4"
          onClick={() => setOpen(!open)}
        >
          {open === true ? (
            <FaRegWindowClose className="text-2xl"></FaRegWindowClose>
          ) : (
            <RiMenu2Line className="text-2xl"></RiMenu2Line>
          )}
        </div>
        <ul
          className={`${
            open ? "top-10" : "-top-60"
          } justify-center duration-1000 md:flex absolute md:static bg-slate-500 p-4 ml-5`}
        >
          {routes.map((route) => (
            <Links key={route.id} route={route}></Links>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
