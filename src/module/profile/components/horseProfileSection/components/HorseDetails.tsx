import React from "react";
import { type HorseSection } from "@/module/profile/types";

export const HorseDetails = ({ label, value }: HorseSection) => {
  return (
    <div className="grid grid-cols-[80px_minmax(100px,_1fr)]">
      <span className="text-lg text-slate-400">{label}:</span>
      <span className="text-black md:text-xl">{value}</span>
    </div>
  );
};
