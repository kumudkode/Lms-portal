import React from "react";
import { Menu } from "@/data/school_management_data";
import Link from "next/link";
import Image from "next/image";
const Sidebar = (props: { menu: Menu[] }) => {
  return (
    <div className="h-full bg-sidebar w-full">
      <Link
        href={"/"}
        className="flex items-center justify-center lg:justify-start gap-x-2 text-7xl text-primary-1 flex-col lg:flex-row"
      >
        <Image src={"/logo.svg"} width={80} height={80} alt={"Logo"} className="filter-difference" />
        <span className="invisible md:visible font-bold text-2xl">Vidya</span>
      </Link>

      <ul className="flex gap-4 flex-col p-4 items-center lg:items-start mt-5 text-sidelinks">
        {props.menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="flex text-3xl items-center gap-2">
              {item.icon}
              <span className=" text-base hidden lg:block">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
