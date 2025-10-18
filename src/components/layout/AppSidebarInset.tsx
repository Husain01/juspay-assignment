import { ReactNode } from "react";
import { TopBarActions } from "./TopBarActions";
import { useSidebar } from "./PageLayout";

interface AppSidebarInsetProps {
  children: ReactNode;
}

export function AppSidebarInset({ children }: AppSidebarInsetProps) {
  const { leftSidebarOpen, rightSidebarOpen } = useSidebar();

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <header
        className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-6"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgba(28, 28, 28, 0.1)",
          marginLeft: leftSidebarOpen ? 0 : 0,
          marginRight: rightSidebarOpen ? 0 : 0,
        }}
      >
        <div className="flex flex-1 items-center gap-2">
          <div className="flex items-center gap-1 text-sm">
            <span style={{ color: "rgba(28, 28, 28, 0.4)" }}>Dashboards</span>
            <span style={{ color: "rgba(28, 28, 28, 0.4)" }}>/</span>
            <span className="font-normal text-[#1C1C1C]">Default</span>
          </div>
        </div>
        <TopBarActions />
      </header>
      <div
        className="flex flex-1 flex-col gap-4 p-6"
        style={{ backgroundColor: "#F7F9FB" }}
      >
        {children}
      </div>
    </div>
  );
}
