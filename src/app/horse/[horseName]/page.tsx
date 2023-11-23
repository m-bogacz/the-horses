import { getHorseByName } from "@/api/horses/getHorseByName";

export default async function CollectionPage({
  params,
}: {
  params: { horseName: string };
}) {
  const horse = await getHorseByName(params.horseName);

  return <span className="flex-1">{JSON.stringify(horse, null, 2)}</span>;
}
