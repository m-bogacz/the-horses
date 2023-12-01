import { notFound } from "next/navigation";
import { getHorseByName } from "@/api/horses/getHorseByName";
import { Profile } from "@/module/profile/Profile";
import { Tabs } from "@/module/tabs/Tabs";
import { TabsPanel } from "@/module/tabs/components/TabPanel";

// import { TabSection } from "@/module/tabs/components/TabSection";

export default async function HorsePage({
  params,
}: {
  params: { slug: string };
}) {
  const horse = await getHorseByName(params.slug);
  console.log(params);

  if (!horse) {
    notFound();
  }

  return (
    <section className="flex-1">
      <section className="flex w-full flex-col">
        <Profile horse={horse} />
        <div className="flex-1 ">
          <Tabs>
            <TabsPanel />
          </Tabs>
        </div>
      </section>
    </section>
  );
}
