import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [togglemenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-silver" href="#">
        Mena
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
        <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      {togglemenu && (
        <nav className="block md:hidden text-black">
          <ul onClick={()=> setToggleMenu(!togglemenu)} className="flex flex-col text-white mobile-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
            <a href="#resume">Resume</a>
          </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!togglemenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
