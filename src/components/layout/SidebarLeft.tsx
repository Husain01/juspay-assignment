import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  FolderOpen,
  User,
  Briefcase,
  FileText,
  MessageSquare,
} from "lucide-react";
import { NavLink } from "./NavLink";
import { useSidebar } from "./PageLayout";

interface SidebarLeftProps {
  currentPage: "home" | "orders";
  onNavigate: (page: "home" | "orders") => void;
}

const dashboardItems = [
  { icon: LayoutDashboard, label: "Default", page: "home" as const },
  { icon: ShoppingCart, label: "eCommerce", page: "home" as const },
  { icon: FolderOpen, label: "Projects", page: "home" as const },
  { icon: Package, label: "Online Courses", page: "home" as const },
];

const pageItems = [
  {
    icon: User,
    label: "User Profile",
    page: "home" as const,
    hasSubmenu: true,
  },
  { icon: Briefcase, label: "Account", page: "home" as const },
  { icon: Briefcase, label: "Corporate", page: "home" as const },
  { icon: FileText, label: "Blog", page: "home" as const },
  { icon: MessageSquare, label: "Social", page: "home" as const },
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
          className="h-full overflow-hidden"
          style={{ borderRight: "1px solid rgba(28, 28, 28, 0.1)" }}
        >
          <motion.div
            className="h-full bg-white flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div
              className="border-b p-4"
              style={{ borderColor: "rgba(28, 28, 28, 0.1)" }}
            >
              <div className="flex h-16 items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-[#1C1C1C]" />
                <span className="text-sm font-normal text-[#1C1C1C]">
                  ByeWind
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {/* Favorites Section */}
              <div className="mb-3">
                <div className="mb-3 flex items-center justify-between">
                  <button className="text-sm font-normal text-[#1C1C1C]">
                    Favorites
                  </button>
                  <button
                    className="text-sm font-normal"
                    style={{ color: "rgba(28, 28, 28, 0.4)" }}
                  >
                    Recently
                  </button>
                </div>
                <div className="mb-3 space-y-0">
                  <div className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-normal text-[#1C1C1C] transition-colors hover:bg-[rgba(28,28,28,0.05)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1C1C1C]" />
                    <span>Overview</span>
                  </div>
                  <div className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-normal text-[#1C1C1C] transition-colors hover:bg-[rgba(28,28,28,0.05)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1C1C1C]" />
                    <span>Projects</span>
                  </div>
                </div>
              </div>

              {/* Dashboards Section */}
              <div className="mb-3">
                <div className="mb-1 px-3 py-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(28, 28, 28, 0.4)" }}
                  >
                    Dashboards
                  </p>
                </div>
                <div className="space-y-0">
                  {dashboardItems.map((item) => (
                    <NavLink
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      active={
                        item.label === "Default" && currentPage === "home"
                      }
                      onClick={() => onNavigate(item.page)}
                    />
                  ))}
                </div>
              </div>

              {/* Pages Section */}
              <div>
                <div className="mb-1 px-3 py-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "rgba(28, 28, 28, 0.4)" }}
                  >
                    Pages
                  </p>
                </div>
                <div className="space-y-0">
                  {pageItems.map((item) => (
                    <NavLink
                      key={item.label}
                      icon={item.icon}
                      label={item.label}
                      active={false}
                      onClick={() => onNavigate(item.page)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer - Upgrade to Pro */}
            <div
              className="border-t p-4"
              style={{ borderColor: "rgba(28, 28, 28, 0.1)" }}
            >
              <div
                className="rounded-lg p-4 mx-0"
                style={{ backgroundColor: "rgba(28, 28, 28, 0.05)" }}
              >
                <p className="text-sm font-medium text-[#1C1C1C]">
                  Upgrade to Pro
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{ color: "rgba(28, 28, 28, 0.4)" }}
                >
                  Get 1 month free and unlock all features
                </p>
                <button className="mt-3 w-full rounded-md bg-[#1C1C1C] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1C1C1C]/90">
                  Upgrade
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
