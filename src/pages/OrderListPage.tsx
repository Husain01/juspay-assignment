import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Plus,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OrderListTable } from "@/components/orders/OrderListTable";
import { OrderListPagination } from "@/components/orders/OrderListPagination";
import { useStore } from "@/store/useStore";

export function OrderListPage() {
  const {
    orders,
    selectedOrders,
    searchQuery,
    statusFilter,
    sortBy,
    currentPage,
    itemsPerPage,
    setSearchQuery,
    setStatusFilter,
    setSortBy,
    setCurrentPage,
    setItemsPerPage,
    toggleOrderSelection,
  } = useStore();

  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Filter and sort orders
  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (order) =>
          order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "name-asc":
          return a.user.name.localeCompare(b.user.name);
        case "name-desc":
          return b.user.name.localeCompare(a.user.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [orders, searchQuery, statusFilter, sortBy]);

  // Paginate orders
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedOrders.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedOrders, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);

  const handleSearch = (value: string) => {
    setLocalSearch(value);
    setSearchQuery(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Order List</h1>
      </div>

      {/* Table Controls Bar */}
      <div className="flex items-center justify-between">
        {/* Left Group - Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 bg-background border-border hover:bg-accent"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 bg-background border-border hover:bg-accent"
          >
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 bg-background border-border hover:bg-accent"
          >
            <ArrowUpDown className="h-4 w-4 mr-1" />
            Sort
          </Button>
        </div>

        {/* Right Group - Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={localSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="h-8 w-64 pl-9 bg-background border-border"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Orders Table */}
      <OrderListTable
        orders={paginatedOrders}
        selectedOrders={selectedOrders}
        onToggleSelection={toggleOrderSelection}
      />

      {/* Pagination */}
      <div className="flex justify-center">
        <OrderListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </motion.div>
  );
}
