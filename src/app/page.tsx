import { Sidebar } from "@/module/sidebar/Sidebar";

export default async function Home() {
  return (
    <section className="flex-1">
      <section className="h-full flex">
        <Sidebar />
      </section>
    </section>
  );
}
