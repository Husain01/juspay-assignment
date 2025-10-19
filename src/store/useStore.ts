import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Order {
  id: string;
  orderId: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

interface AppState {
  orders: Order[];
  selectedOrders: string[];
  searchQuery: string;
  statusFilter: string;
  sortBy: string;
  currentPage: number;
  itemsPerPage: number;
  setOrders: (orders: Order[]) => void;
  setSelectedOrders: (orders: string[]) => void;
  toggleOrderSelection: (orderId: string) => void;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: string) => void;
  setSortBy: (sortBy: string) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      orders: generateMockOrders(),
      selectedOrders: [],
      searchQuery: "",
      statusFilter: "all",
      sortBy: "date-desc",
      currentPage: 1,
      itemsPerPage: 10,
      setOrders: (orders) => set({ orders }),
      setSelectedOrders: (orders) => set({ selectedOrders: orders }),
      toggleOrderSelection: (orderId) =>
        set((state) => ({
          selectedOrders: state.selectedOrders.includes(orderId)
            ? state.selectedOrders.filter((id) => id !== orderId)
            : [...state.selectedOrders, orderId],
        })),
      setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
      setStatusFilter: (status) =>
        set({ statusFilter: status, currentPage: 1 }),
      setSortBy: (sortBy) => set({ sortBy }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setItemsPerPage: (items) => set({ itemsPerPage: items, currentPage: 1 }),
    }),
    {
      name: "juspay-dashboard-storage",
    }
  )
);

// Generate mock orders data
function generateMockOrders(): Order[] {
  const statuses: Order["status"][] = [
    "In Progress",
    "Complete",
    "Pending",
    "Approved",
    "Rejected",
  ];
  const users = [
    { name: "Natali Craig", avatar: "/avatar-female05.png" },
    { name: "Orlando Diggs", avatar: "/avatar-male07.png" },
    { name: "Kate Morrison", avatar: "/kate-morrison.png" },
    { name: "Drew Cano", avatar: "/drew-cano.png" },
    { name: "Koray Okumus", avatar: "/koray-okumus.png" },
    { name: "Andi Lane", avatar: "/andi-lane.png" },
    { name: "Natali Craig", avatar: "/natali-craig.png" },
    { name: "Orlando Diggs", avatar: "/orlando-diggs.png" },
  ];
  const projects = [
    "Landing Page",
    "CRM Admin pages",
    "Mobile App",
    "Dashboard Design",
    "E-commerce Site",
    "Portfolio Website",
    "Blog Platform",
    "API Integration",
  ];
  const addresses = [
    "Meadow Lane Oakland",
    "Nest Lane Olivette",
    "Park Avenue New York",
    "Main Street Boston",
    "Oak Street Chicago",
    "Pine Road Seattle",
    "Cedar Lane Portland",
    "Maple Drive Austin",
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const user = users[Math.floor(Math.random() * users.length)];
    const project = projects[Math.floor(Math.random() * projects.length)];
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    // Generate realistic dates
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);

    let dateString = "";
    if (daysAgo === 0) {
      dateString = "Just now";
    } else if (daysAgo === 1) {
      dateString = "A minute ago";
    } else if (daysAgo < 60) {
      dateString = `${daysAgo} hour${daysAgo > 1 ? "s" : ""} ago`;
    } else if (daysAgo < 24) {
      dateString = "Yesterday";
    } else {
      dateString = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }

    return {
      id: `order-${i + 1}`,
      orderId: `#CM${String(9800 + i + 1).padStart(2, "0")}`,
      user,
      project,
      address,
      date: dateString,
      status,
    };
  });
}
