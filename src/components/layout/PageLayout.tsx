import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  currentPage: "home" | "orders";
  onNavigate: (page: "home" | "orders") => void;
}

export function PageLayout({
  children,
  className,
  currentPage,
  onNavigate,
}: PageLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background">
      <Sidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <TopBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className={cn("pt-16 lg:ml-64", className)}>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
