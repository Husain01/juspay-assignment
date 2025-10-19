import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  ChevronRight,
  ChevronDown,
  UserCheck,
  CreditCard,
  Users2,
  NotebookPen,
  MessageCircle,
  PieChart,
  ShoppingBag,
  FolderOpen,
  BookOpen,
} from "lucide-react";
import { useSidebar } from "./PageLayout";

interface SidebarLeftProps {
  currentPage: "home" | "orders";
  onNavigate: (page: "home" | "orders") => void;
}

const dashboardItems = [
  {
    icon: PieChart,
    label: "Default",
    page: "home" as const,
    isSelected: true,
  },
  {
    icon: ShoppingBag,
    label: "eCommerce",
    page: "home" as const,
    hasChevron: true,
  },
  {
    icon: FolderOpen,
    label: "Projects",
    page: "home" as const,
    hasChevron: true,
  },
  {
    icon: BookOpen,
    label: "Online Courses",
    page: "home" as const,
    hasChevron: true,
  },
];

const pageItems = [
  {
    icon: UserCheck,
    label: "User Profile",
    page: "home" as const,
    hasSubmenu: true,
    isExpanded: true,
    subItems: [
      { label: "Overview", page: "home" as const },
      { label: "Projects", page: "home" as const },
      { label: "Campaigns", page: "home" as const },
      { label: "Documents", page: "home" as const },
      { label: "Followers", page: "home" as const },
    ],
  },
  { icon: ShoppingCart, label: "Orders", page: "orders" as const },
  {
    icon: CreditCard,
    label: "Account",
    page: "home" as const,
    hasChevron: true,
  },
  { icon: Users2, label: "Corporate", page: "home" as const, hasChevron: true },
  { icon: NotebookPen, label: "Blog", page: "home" as const, hasChevron: true },
  {
    icon: MessageCircle,
    label: "Social",
    page: "home" as const,
    hasChevron: true,
  },
];

export function SidebarLeft({ currentPage, onNavigate }: SidebarLeftProps) {
  const { leftSidebarOpen } = useSidebar();

  return (
    <AnimatePresence mode="wait">
      {leftSidebarOpen && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 280 }}
          exit={{ width: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1],
            type: "tween",
          }}
          className="h-full overflow-hidden sticky top-0 border-r border-border"
        >
          <motion.div
            className="h-full flex flex-col bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {/* User Profile Section */}
            <div className="px-4 py-4">
              <div className="flex h-12 items-center gap-3">
                <div className="relative">
                  {/* Outer light blue ring */}
                  <div className="h-8 w-8 rounded-full border-2 border-[#87CEEB] flex items-center justify-center">
                    {/* Inner dark avatar */}
                    <div className="h-6 w-6 rounded-full bg-[#1C1C1C] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-normal text-foreground">
                  ByeWind
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 max-h-[calc(100vh-64px)]">
              {/* Favorites Section */}
              <div className="pb-3">
                {/* Tab buttons with exact Figma spacing */}
                <div className="flex items-center gap-4 mb-1">
                  <button className="px-2 py-1 font-normal text-muted-foreground">
                    Favorites
                  </button>
                  <button className="px-2 py-1 font-normal text-muted-foreground/50">
                    Recently
                  </button>
                </div>
                {/* List items with exact Figma spacing */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1 px-2 py-1">
                    <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    </div>
                    <span className="text-sm font-normal text-foreground">
                      Overview
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1">
                    <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    </div>
                    <span className="text-sm font-normal text-foreground">
                      Projects
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboards Section */}
              <div className="mb-3">
                <div className="py-1 px-3">
                  <p className="text-sm font-normal text-muted-foreground">
                    Dashboards
                  </p>
                </div>
                <div className="space-y-0">
                  {dashboardItems.map((item) => (
                    <div key={item.label}>
                      {item.isSelected ? (
                        <div className="flex w-full items-center gap-1 rounded-lg py-1 pr-2 pl-5 bg-muted/50">
                          <item.icon className="h-5 w-5 text-foreground" />
                          <span className="text-sm font-normal text-foreground">
                            {item.label}
                          </span>
                        </div>
                      ) : (
                        <div className="flex w-full items-center gap-1 rounded-lg py-1 pr-2 pl-0">
                          {item.hasChevron && (
                            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                          )}
                          <item.icon className="h-5 w-5 text-foreground" />
                          <span className="text-sm font-normal text-foreground">
                            {item.label}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pages Section */}
              <div>
                <div className="mb-1 px-3 py-1">
                  <p className="text-sm font-normal text-muted-foreground">
                    Pages
                  </p>
                </div>
                <div className="space-y-0">
                  {pageItems.map((item) => (
                    <div key={item.label}>
                      {item.hasSubmenu ? (
                        <div>
                          <div className="flex w-full items-center gap-1 rounded-lg px-2 py-1 pr-2">
                            <ChevronDown className="h-4 w-4 text-muted-foreground/50" />
                            <item.icon className="h-5 w-5 text-foreground" />
                            <span className="text-sm font-normal flex-1 text-foreground">
                              {item.label}
                            </span>
                          </div>
                          {item.isExpanded && item.subItems && (
                            <div className="ml-6 mt-0 space-y-0">
                              {item.subItems.map((subItem) => (
                                <div
                                  key={subItem.label}
                                  className="flex w-full items-center gap-1 rounded-lg px-2 py-1 pr-2"
                                >
                                  <div
                                    className="h-5 w-5 flex items-center justify-center"
                                    style={{ opacity: 0 }}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                                  </div>
                                  <span className="text-sm font-normal flex-1 text-foreground">
                                    {subItem.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className={`flex w-full items-center gap-1 rounded-lg px-2 py-1 pr-2 ${
                            item.label === "Orders" && currentPage === "orders"
                              ? "bg-accent text-accent-foreground pl-4"
                              : ""
                          }`}
                          onClick={() => onNavigate(item.page)}
                        >
                          {item.hasChevron && (
                            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                          )}
                          <item.icon className="h-5 w-5 text-foreground" />
                          <span className="text-sm font-normal flex-1 text-foreground">
                            {item.label}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
