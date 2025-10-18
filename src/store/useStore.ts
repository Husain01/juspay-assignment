import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Order {
  id: string
  orderNumber: string
  date: string
  customer: string
  status: 'Completed' | 'Pending' | 'Cancelled' | 'Shipped' | 'Processing'
  amount: number
  items: number
  paymentMethod: string
}

interface AppState {
  orders: Order[]
  searchQuery: string
  statusFilter: string
  sortBy: string
  currentPage: number
  itemsPerPage: number
  setOrders: (orders: Order[]) => void
  setSearchQuery: (query: string) => void
  setStatusFilter: (status: string) => void
  setSortBy: (sortBy: string) => void
  setCurrentPage: (page: number) => void
  setItemsPerPage: (items: number) => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      orders: generateMockOrders(),
      searchQuery: '',
      statusFilter: 'all',
      sortBy: 'date-desc',
      currentPage: 1,
      itemsPerPage: 10,
      setOrders: (orders) => set({ orders }),
      setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
      setStatusFilter: (status) => set({ statusFilter: status, currentPage: 1 }),
      setSortBy: (sortBy) => set({ sortBy }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setItemsPerPage: (items) => set({ itemsPerPage: items, currentPage: 1 }),
    }),
    {
      name: 'juspay-dashboard-storage',
    }
  )
)

// Generate mock orders data
function generateMockOrders(): Order[] {
  const statuses: Order['status'][] = ['Completed', 'Pending', 'Cancelled', 'Shipped', 'Processing']
  const customers = [
    'John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown',
    'David Lee', 'Emma Wilson', 'Frank Garcia', 'Grace Martinez', 'Henry Davis'
  ]
  const paymentMethods = ['Credit Card', 'PayPal', 'Debit Card', 'Bank Transfer']
  
  return Array.from({ length: 50 }, (_, i) => ({
    id: `order-${i + 1}`,
    orderNumber: `ORD-${String(i + 1001).padStart(5, '0')}`,
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    customer: customers[Math.floor(Math.random() * customers.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    amount: Math.floor(Math.random() * 5000) + 100,
    items: Math.floor(Math.random() * 10) + 1,
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)]
  }))
}

