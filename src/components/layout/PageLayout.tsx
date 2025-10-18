import { ReactNode, createContext, useContext, useState } from "react";
import { SidebarLeft } from "./SidebarLeft";
import { SidebarRight } from "./SidebarRight";
import { AppSidebarInset } from "./AppSidebarInset";

interface SidebarContextType {
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a PageLayout");
  }
  return context;
}

interface PageLayoutProps {
  children: ReactNode;
  currentPage: "home" | "orders";
  onNavigate: (page: "home" | "orders") => void;
}

export function PageLayout({
  children,
  currentPage,
  onNavigate,
}: PageLayoutProps) {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  const toggleLeftSidebar = () => setLeftSidebarOpen(!leftSidebarOpen);
  const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);

  return (
    <SidebarContext.Provider
      value={{
        leftSidebarOpen,
        rightSidebarOpen,
        toggleLeftSidebar,
        toggleRightSidebar,
      }}
    >
      <div className="flex h-screen overflow-hidden">
        <SidebarLeft currentPage={currentPage} onNavigate={onNavigate} />
        <AppSidebarInset>{children}</AppSidebarInset>
        <SidebarRight />
      </div>
    </SidebarContext.Provider>
  );
}
