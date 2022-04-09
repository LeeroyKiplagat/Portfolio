import React from "react";

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
  return (
    <nav className="flex items-center justify-center h-auto fixed z-10 w-screen  bg-white shadow  shadow-gray-300">
      <div className="grid md:grid-cols-3">
        <div className="md:ml-[300px] flex items-center justify-center ">
          <h1 className=" font-bold uppercase text-red-600 text-lg md:text-2xl lg:text-4xl">
            Leeroy
          </h1>
        </div>
        <div className="md:ml-[450px] flex md:justify-center lg:justify-between  max-w-2xl mt-4  ">
          <NavBarItem title="home" Icon={HomeIcon} url="#home" />

          <NavBarItem title="about" Icon={UserIcon} url="#about" />
          <NavBarItem title="services" Icon={ServerIcon} url="#services" />
          <NavBarItem title="projects" Icon={DocumentIcon} url="#project" />
          <NavBarItem title="contact" Icon={PhoneIcon} url="#contact" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
