"use client";

type TabNameProps =
  | "News"
  | "Veterinarian"
  | "Vaccinations"
  | "Gallery"
  | "BlackSmith"
  | "Genealogy tree";

import React from "react";

const tabName = [
  "News",
  "Veterinarian",
  "Vaccinations",
  "Gallery",
  "BlackSmith",
  "Genealogy tree",
] satisfies TabNameProps[];

export const Tabs = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4">
      {tabName.map((tab) => {
        return <Tab key={tab} tab={tab} />;
      })}
    </div>
  );
};

export const Tab = ({ tab }: { tab: TabNameProps }) => {
  switch (tab) {
    case "News":
      return <div className="border p-2">News</div>;
    case "Veterinarian":
      return <div className="border p-2">Veterinarian</div>;
    case "Vaccinations":
      return <div className="border p-2">Vaccinations</div>;
    case "Gallery":
      return <div className="border p-2">Gallery</div>;
    case "BlackSmith":
      return <div className="border p-2">BlackSmith</div>;
    case "Genealogy tree":
      return <div className="border p-2">Genealogy tree</div>;
    default:
      return <div className="border p-2">News</div>;
  }
};

Tab.displayName = "Tab";
