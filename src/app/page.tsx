import { getHorses } from "@/api/horses/getAllhorses";

export default async function Home() {
  const horses = await getHorses();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world
      {horses.map((horse) => (
        <div key={horse.id}>{horse.name}</div>
      ))}
    </main>
  );
}
