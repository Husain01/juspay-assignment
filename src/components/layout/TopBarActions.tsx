import { motion } from "framer-motion";
import { Search, Bell, Moon, Sun, Star, History } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme-provider";
import { useSidebar } from "./PageLayout";

export function TopBarActions() {
  const { theme, setTheme } = useTheme();
  const { toggleLeftSidebar, toggleRightSidebar } = useSidebar();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="ml-auto flex items-center gap-2 px-3">
      {/* Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            style={{ color: "rgba(28, 28, 28, 0.4)" }}
          />
          <Input
            placeholder="Search"
            className="h-9 rounded-lg border pl-9 pr-16 text-sm font-normal text-[#1C1C1C] placeholder:text-[rgba(28,28,28,0.4)]"
            style={{
              borderColor: "rgba(28, 28, 28, 0.1)",
              backgroundColor: "#FFFFFF",
            }}
          />
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 rounded px-1.5 py-0.5"
            style={{ backgroundColor: "rgba(28, 28, 28, 0.05)" }}
          >
            <span
              className="text-xs font-normal"
              style={{ color: "rgba(28, 28, 28, 0.4)" }}
            >
              ⌘/
            </span>
          </div>
        </div>
      </div>

      {/* Right section - Actions */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)]"
        >
          <Star className="h-5 w-5 text-[#1C1C1C]" />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)]"
        >
          <History className="h-5 w-5 text-[#1C1C1C]" />
        </Button>
      </motion.div>

      {/* Left Sidebar Toggle */}
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
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#1C1C1C]"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Button>
      </motion.div>

      {/* Right Sidebar Toggle */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleRightSidebar}
          className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)] transition-colors duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#1C1C1C]"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)]"
        >
          {theme === "light" ? (
            <Sun className="h-5 w-5 text-[#1C1C1C]" />
          ) : (
            <Moon className="h-5 w-5 text-[#1C1C1C]" />
          )}
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg hover:bg-[rgba(28,28,28,0.05)] relative"
        >
          <Bell className="h-5 w-5 text-[#1C1C1C]" />
        </Button>
      </motion.div>

      <div
        className="ml-2 h-6 w-px"
        style={{ backgroundColor: "rgba(28, 28, 28, 0.1)" }}
      />

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="ml-2"
      >
        <Button
          variant="ghost"
          className="h-9 gap-2 rounded-lg px-2 hover:bg-[rgba(28,28,28,0.05)]"
        >
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-xs">JD</AvatarFallback>
          </Avatar>
        </Button>
      </motion.div>
    </div>
  );
}
