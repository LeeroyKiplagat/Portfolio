import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  PhoneIcon,
  UserIcon,
  DocumentIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";

function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-center h-auto fixed z-10 w-screen bg-white shadow-inner shadow-black">
      <div className="grid md:grid-cols-2">
        <div className=" flex items-center justify-center">
          <h1 className=" font-bold uppercase text-red-600 text-lg md:text-2xl lg:text-4xl">
            Leeroy
          </h1>
        </div>
        <div className="flex flex-grow items-center justify-evenly max-w-2xl mt-4 ">
          <button>
            <NavBarItem title="Home" Icon={HomeIcon} />
          </button>

          <NavBarItem title="About" Icon={UserIcon} />
          <NavBarItem title="Services" Icon={ServerIcon} />
          <NavBarItem title="Projects" Icon={DocumentIcon} />
          <NavBarItem title="Contact" Icon={PhoneIcon} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
