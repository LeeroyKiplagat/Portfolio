import React from "react";
import Link from "next/link";

function NavBarItem({ Icon, title, url }) {
  return (
    <Link href={url} spy={true} smooth={true} offset={50} duration={500}>
      <div className=" flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-black">
        <Icon className=" h-8 mb-1 group-hover:animate-bounce" />
        <p className=" font-bold opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default NavBarItem;
