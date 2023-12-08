import React from "react";

import { Asidebar } from "./Asidebar";
import { getHorses } from "@/api/horses/getAllhorses";

export const Sidebar = async () => {
  const data = await getHorses();

  if (data?.data.length === 0) return null;

  return <Asidebar data={data?.data} />;
};
