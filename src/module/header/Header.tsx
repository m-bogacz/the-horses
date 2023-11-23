import React from "react";
import Image from "next/image";
import { Sidebar } from "../sidebar/Sidebar";
import { Hamburger } from "./components/Hamburger";
import { ActiveLink } from "@/shared/ActiveLink";

export const Header = () => {
  return (
    <header className="relative">
      <div className="flex items-center justify-between ">
        <div className="w-40 md:w-48 min-w-min flex flex-col bg-dark p-5">
          <span className="flex items-center">
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
          <Hamburger>
            <Sidebar />
          </Hamburger>
        </div>
        <nav className="flex-1 flex md:justify-between justify-end h-20 md:border-b mx-10 items-center  border-b-slate-400">
          <h2 className="text-4xl font-medium  hidden md:block">Dashboard</h2>
          <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center">
            MB
          </div>
        </nav>
      </div>
    </header>
  );
};
