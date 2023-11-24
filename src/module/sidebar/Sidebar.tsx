import React from "react";
import Image from "next/image";
import { getHorses } from "@/api/horses/getAllhorses";
import { ActiveLink } from "@/shared/ActiveLink";

export const Sidebar = async () => {
  const horses = await getHorses();
  return (
    <aside className="h-full w-full bg-nav rounded-s-sm ">
      <ul className="h-full w-full flex-col items-stretch p-5">
        {horses.map((horse) => {
          return (
            <ActiveLink key={horse.id} href={`/horse/${horse.slug}`}>
              <section className="flex justify-center items-center mb-5 gap-2">
                {horse.profileImage?.url ? (
                  <Image
                    src={horse.profileImage?.url}
                    width={100}
                    height={100}
                    alt={horse.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <span className="w-10 h-10 bg-dark rounded-full" />
                )}

                <span className="md:text-lg">{horse.name}</span>
              </section>
            </ActiveLink>
          );
        })}
      </ul>
    </aside>
  );
};
