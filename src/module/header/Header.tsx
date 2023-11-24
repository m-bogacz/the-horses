import React from "react";
import Image from "next/image";
import { Sidebar } from "../sidebar/Sidebar";
import { Hamburger } from "./components/Hamburger";
import { Description } from "./components/Description";
import { ActiveLink } from "@/shared/ActiveLink";

export const Header = () => {
  return (
    <header className="relative">
      <div className="flex items-center justify-between bg-dark md:bg-white">
        <div className="w-48 md:w-48 min-w-min flex flex-col bg-dark p-2 md:p-5">
          <span className="flex items-center">
            <Hamburger>
              <Sidebar />
            </Hamburger>
            <Image
              priority
              src="/logo.svg"
              height={42}
              width={42}
              alt="Logo App"
            />
            <ActiveLink href={"/"}>
              <h1 className="md:text-lg divide-y-gray-600 text-logo text-sm">
                Horselogy
              </h1>
            </ActiveLink>
          </span>
        </div>
        <nav className="flex-1 flex md:justify-between justify-end h-20 md:border-b mx-10 items-center  border-b-slate-400">
          <Description />
          <div className="w-10 h-10 md:bg-dark bg-white rounded-full flex items-center justify-center">
            MB
          </div>
        </nav>
      </div>
    </header>
  );
};
