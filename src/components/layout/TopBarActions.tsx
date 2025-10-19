import { motion } from "framer-motion";
import { Search, Bell, Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useSidebar } from "./PageLayout";

export function TopBarActions() {
  const { theme, setTheme } = useTheme();
  const { toggleRightSidebar } = useSidebar();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="ml-auto flex items-center gap-2 px-3">
      {/* Search */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="h-9 rounded-lg border border-input bg-input pl-9 pr-16 text-sm font-normal text-foreground"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 rounded px-1.5 py-0.5 bg-muted">
            <span className="text-xs font-normal text-muted-foreground">
              ⌘/
            </span>
          </div>
        </div>
      </div>

      {/* Sun/Moon Icon */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="h-9 w-9 rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground"
        >
          {theme === "light" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </motion.div>

      {/* Clock Icon */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg hover:bg-accent text-foreground hover:text-accent-foreground"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.875 14C20.875 15.3597 20.4718 16.689 19.7164 17.8195C18.9609 18.9501 17.8872 19.8313 16.631 20.3517C15.3747 20.872 13.9924 21.0082 12.6588 20.7429C11.3251 20.4776 10.1001 19.8228 9.13864 18.8614C8.17716 17.8999 7.52238 16.6749 7.2571 15.3412C6.99183 14.0076 7.12798 12.6253 7.64833 11.3691C8.16868 10.1128 9.04987 9.03908 10.1805 8.28365C11.311 7.52821 12.6403 7.125 14 7.125C15.8234 7.125 17.572 7.84933 18.8614 9.13864C20.1507 10.428 20.875 12.1766 20.875 14Z"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <path
              d="M14.625 10.25V13.6461L17.4469 15.3391C17.589 15.4245 17.6914 15.5628 17.7316 15.7237C17.7717 15.8845 17.7463 16.0548 17.6609 16.1969C17.5756 16.339 17.4372 16.4414 17.2764 16.4816C17.1155 16.5217 16.9453 16.4963 16.8031 16.411L13.6781 14.536C13.5856 14.4804 13.5091 14.4018 13.456 14.3079C13.4029 14.214 13.375 14.1079 13.375 14V10.25C13.375 10.0843 13.4408 9.92529 13.5581 9.80808C13.6753 9.69087 13.8342 9.62502 14 9.62502C14.1658 9.62502 14.3247 9.69087 14.4419 9.80808C14.5592 9.92529 14.625 10.0843 14.625 10.25ZM14 6.50002C13.0141 6.49757 12.0374 6.69067 11.1266 7.06817C10.2158 7.44566 9.38889 8.00005 8.69375 8.69924C8.12578 9.27424 7.62109 9.82737 7.125 10.4063V9.00002C7.125 8.83426 7.05915 8.67529 6.94194 8.55808C6.82473 8.44087 6.66576 8.37502 6.5 8.37502C6.33424 8.37502 6.17527 8.44087 6.05806 8.55808C5.94085 8.67529 5.875 8.83426 5.875 9.00002V12.125C5.875 12.2908 5.94085 12.4498 6.05806 12.567C6.17527 12.6842 6.33424 12.75 6.5 12.75H9.625C9.79076 12.75 9.94973 12.6842 10.0669 12.567C10.1842 12.4498 10.25 12.2908 10.25 12.125C10.25 11.9593 10.1842 11.8003 10.0669 11.6831C9.94973 11.5659 9.79076 11.5 9.625 11.5H7.82812C8.38672 10.8422 8.94297 10.2227 9.57734 9.58049C10.446 8.71186 11.5513 8.11847 12.7553 7.87446C13.9592 7.63045 15.2084 7.74665 16.3467 8.20853C17.485 8.67041 18.4619 9.45749 19.1555 10.4714C19.849 11.4854 20.2283 12.6812 20.2461 13.9095C20.2639 15.1378 19.9193 16.3441 19.2554 17.3777C18.5915 18.4113 17.6377 19.2263 16.5132 19.7209C15.3888 20.2155 14.1435 20.3678 12.933 20.1587C11.7225 19.9496 10.6004 19.3885 9.70703 18.5453C9.64732 18.4889 9.57708 18.4448 9.50032 18.4155C9.42356 18.3862 9.34179 18.3724 9.25967 18.3747C9.17754 18.377 9.09668 18.3955 9.0217 18.429C8.94672 18.4626 8.87908 18.5106 8.82266 18.5703C8.76623 18.63 8.72212 18.7003 8.69283 18.777C8.66355 18.8538 8.64967 18.9356 8.652 19.0177C8.65432 19.0998 8.67279 19.1807 8.70636 19.2557C8.73993 19.3306 8.78795 19.3983 8.84766 19.4547C9.73785 20.2948 10.8201 20.9042 12 21.2298C13.1799 21.5554 14.4215 21.5873 15.6166 21.3226C16.8116 21.058 17.9237 20.505 18.8559 19.7117C19.788 18.9184 20.5118 17.9091 20.9642 16.7718C21.4165 15.6344 21.5836 14.4037 21.4509 13.1869C21.3182 11.9701 20.8897 10.8043 20.2029 9.79122C19.516 8.77813 18.5916 7.94854 17.5104 7.37485C16.4292 6.80117 15.224 6.50082 14 6.50002Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </motion.div>

      {/* Bell Icon */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg relative hover:bg-accent text-foreground hover:text-accent-foreground"
        >
          <Bell className="h-5 w-5" />
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
          className="h-9 w-9 rounded-lg transition-colors duration-200 hover:bg-accent text-foreground hover:text-accent-foreground"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <path
              d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </motion.div>
    </div>
  );
}
