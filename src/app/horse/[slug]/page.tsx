import { notFound } from "next/navigation";
import { getHorseByName } from "@/api/horses/getHorseByName";
import { Profile } from "@/module/profile/Profile";

export default async function CollectionPage({
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
      <section className="flex w-full h-full flex-col sm:flex-row">
        <div className="flex-1 order-2 sm:order-1">tabs</div>
        <Profile horse={horse} />
      </section>
    </section>
  );
}
