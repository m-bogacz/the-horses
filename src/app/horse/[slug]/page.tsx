import { notFound } from "next/navigation";
import { getHorseByName } from "@/api/horses/getHorseByName";
import { Profile } from "@/module/profile/Profile";
import { Tabs } from "@/module/tabs/Tabs";

export default async function HorsePage({
  params,
}: {
  params: { slug: string };
}) {
  const horse = await getHorseByName(params.slug);

  if (!horse) {
    notFound();
  }

  return (
    <section className="flex-1">
      <section className="flex w-full  flex-col sm:flex-row h-1/2">
        <div className="flex-1 order-2 sm:order-1">
          <Tabs />
        </div>
        <Profile horse={horse} />
      </section>
      <section></section>
    </section>
  );
}
