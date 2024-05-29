"use client";
import ThemeContext from "@/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { signIn, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { setEngine } from "crypto";
import Logo from "../Logo/Logo";
export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between bg-transparent">
      <div className="flex items-center w-full md:2/3">
        <Link href="/">
          <img alt="UIT-ESTATE" src="/logo.png" width={200} height={100} />
        </Link>
        <ul className="flex items-center ml-5 mt-5">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="scale-animation img"
                    />
                  </div>
                ) : (
                  <FaUserCircle className="cursor-pointer" />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                  </span>
                </button>
              </Link>
            )}
          </li>
          <li className="ml-2">
            <MdDarkMode className="cursor-pointer" />
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
