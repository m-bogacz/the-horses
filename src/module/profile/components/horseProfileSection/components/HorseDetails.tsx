import React from "react";
import { type HorseSection } from "@/module/profile/types";

export const HorseDetails = ({ label, value }: HorseSection) => {
  return (
    <div className="grid grid-cols-[80px_minmax(100px,_1fr)]">
      <span className="text-base md:xl text-slate-200">{label}:</span>
      <span className="text-slate-900 text-base md:text-xl">{value}</span>
    </div>
  );
};
