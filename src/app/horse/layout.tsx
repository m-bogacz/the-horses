import { Sidebar } from "@/module/sidebar/Sidebar";

export default function HorseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen flex">
      <div className="hidden sm:block w-48  md:w-48 ">
        <Sidebar />
      </div>
      {children}
    </main>
  );
}
