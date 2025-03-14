import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Links } from "../../data/school_management_data";
const NavHome = () => {
  return (
    <div className="flex items-center justify-between pe-4 border-b-primary-2 border-b-2">
      {/* Left */}
      <Link
        href={"/"}
        className="flex items-center justify-center gap-x-2 text-7xl text-primary-1 flex-row"
      >
        <Image
          src={"/logo.svg"}
          width={80}
          height={80}
          alt={"Logo"}
          className="filter-difference"
        />
        <span className="font-bold text-2xl hidden sm:block">Vidya</span>
      </Link>
      {/* middle */}
      <div className="flex gap-4">
        {Links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="border-b-0 hover:bg-primary-1 px-4 py-2 rounded-md transition duration-500 text-white font-bold"
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* right */}
      <Link
        href={"/login"}
        className="px-4 py-2 bg-secondary-1 text-white font-bold rounded-md hover:bg-primary-1 active:scale-95"
      >
        Login
      </Link>
    </div>
  );
};

export default NavHome;
