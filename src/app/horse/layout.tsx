import { Sidebar } from "@/module/sidebar/Sidebar";

export default function HorseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen flex">
      <div className="hidden md:block w-48">
        <Sidebar />
      </div>
      {children}
    </main>
  );
}
