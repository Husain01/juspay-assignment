import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";

interface SidebarProps {
  className?: string;
  currentPage: "home" | "orders";
  onNavigate: (page: "home" | "orders") => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: "Default", page: "home" as const },
  { icon: ShoppingCart, label: "Orders", page: "orders" as const },
  { icon: Package, label: "Products", page: "home" as const },
  { icon: Users, label: "Customers", page: "home" as const },
  { icon: BarChart3, label: "Analytics", page: "home" as const },
  { icon: Settings, label: "Settings", page: "home" as const },
  { icon: HelpCircle, label: "Help", page: "home" as const },
];

export function Sidebar({
  className,
  currentPage,
  onNavigate,
  isOpen = true,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
        />
      )}

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card",
          "lg:translate-x-0",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="text-xl font-bold">ByeWind</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <div className="mb-4">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Favorites
              </p>
              <p className="mt-2 px-3 text-sm text-muted-foreground">
                Recently
              </p>
            </div>

            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Dashboards
              </p>
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  active={currentPage === item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    onClose?.();
                  }}
                />
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t p-4">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Upgrade to Pro</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Get 1 month free and unlock all features
              </p>
              <button className="mt-3 w-full rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
