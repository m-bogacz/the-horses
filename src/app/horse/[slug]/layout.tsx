import { notFound } from "next/navigation";
import { getHorseByName } from "@/api/horses/getHorseByName";
import { Profile } from "@/module/profile/Profile";
import { Tabs } from "@/module/tabs/Tabs";

export default async function SlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const horse = await getHorseByName(params.slug);

  if (!horse) {
    notFound();
  }

  return (
    <section className="flex-1">
      <section className="flex w-full flex-col">
        <Profile horse={horse} />

        <div className="flex-1 ">
          <Tabs></Tabs>
        </div>
      </section>
      {children}
    </section>
  );
}
