import { Sidebar } from "@/module/sidebar/Sidebar";

export default async function Home() {
  return (
    <section className="flex-1">
      <section className="h-full flex xs:w-48 w-full md:w-48">
        <Sidebar />
      </section>
    </section>
  );
}
