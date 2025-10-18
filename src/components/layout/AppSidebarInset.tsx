import { ReactNode } from "react";
import { TopBarActions } from "./TopBarActions";
import { useSidebar } from "./PageLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface AppSidebarInsetProps {
  children: ReactNode;
}

export function AppSidebarInset({ children }: AppSidebarInsetProps) {
  const { leftSidebarOpen, rightSidebarOpen, toggleLeftSidebar } = useSidebar();

  const calculatedMarginLeft = leftSidebarOpen ? 280 : 0;
  const calculatedMarginRight = rightSidebarOpen ? 280 : 0;

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <header
        className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b px-6"
        style={{
          backgroundColor: "#FFFFFF", // White background as per light theme
          borderColor: "rgba(28, 28, 28, 0.1)", // Dark border for light theme
        }}
      >
        <div className="flex flex-1 items-center gap-2">
          {/* Left Sidebar Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLeftSidebar}
              className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)] transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1C1C1C]"
              >
                <path
                  d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z"
                  fill="#1C1C1C"
                  fillOpacity="0.1"
                />
                <path
                  d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z"
                  fill="#1C1C1C"
                />
              </svg>
            </Button>
          </motion.div>

          {/* Star Icon */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)]"
            >
              <Star className="h-5 w-5 text-[#1C1C1C]" />
            </Button>
          </motion.div>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-3 text-sm">
            <span style={{ color: "rgba(28, 28, 28, 0.4)" }}>Dashboards</span>
            <span style={{ color: "rgba(28, 28, 28, 0.4)" }}>/</span>
            <span className="font-normal text-[#1C1C1C]">Default</span>
          </div>
        </div>
        <TopBarActions />
      </header>
      <div
        className="flex flex-1 flex-col gap-4 p-6 overflow-y-auto"
        style={{ backgroundColor: "#F7F9FB", minHeight: "calc(100vh - 64px)" }}
      >
        {children}
      </div>
    </div>
  );
}
