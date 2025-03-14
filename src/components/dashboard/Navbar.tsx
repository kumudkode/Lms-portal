import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdNotificationsNone } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { Url } from "next/dist/shared/lib/router/router";

const Navbar = (props: {
  name: String;
  role: String;
  image: Url;
  search: Boolean;
}) => {
  return (
    <div className="w-full flex items-center justify-end md:justify-between gap-8 px-4 py-1 bg-navbar">
      {props.search ? (
        <div className="relative md:flex hidden items-center gap-2 ">
          <FiSearch className="absolute left-2 text-gray-500" />
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="w-full px-8 py-1 rounded-xl bg-gray-200 border-none  focus:outline-primary-1 focus:outline-2"
          />
        </div>
      ) : (
        <div className="md:flex flex-col items-start hidden ">
          <h2 className="text-xl">Your Dashboard</h2>
          <h1 className="text-3xl font-bold">{props.name}</h1>
        </div>
      )}

      <div className="flex items-center justify-center gap-8">
        <div className="flex gap-4 text-4xl text-navlinks">
          <Link href={"/notifications"} className="relative">
            <MdNotificationsNone />
            <span className="absolute -top-1 -right-1 bg-red-400 text-sm text-white rounded-full flex items-center justify-center w-5 h-5">
              2
            </span>
          </Link>
          <Link href="/messages" className="relative">
            <IoChatbubbleEllipsesOutline />
            {/* <span className="absolute bottom-0 right-0 bg-red-400 text-sm text-white px-1.5 rounded-full">2</span> */}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end leading-2">
            <span className="text-xl text-primary-2">{props.name}</span>
            <span className="text-md text-gray-700">{props.role}</span>
          </div>
          <Image
            src={"/avatarPlaceholder.png"}
            width={80}
            height={80}
            alt="Profile Image"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
