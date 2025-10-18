# Juspay SaaS Dashboard

A pixel-perfect, responsive SaaS dashboard built with React, TypeScript, and Tailwind CSS v4. Features include dark/light themes, advanced filtering, sorting, searching, pagination, and smooth microinteractions.

## 🚀 Live Demo

🔗 [View Live Demo](https://your-demo-link.vercel.app) _(Deploy link will be added after deployment)_

## 📸 Screenshots

### Light Mode

![Dashboard Home - Light Mode](docs/screenshots/home-light.png)
![Orders Page - Light Mode](docs/screenshots/orders-light.png)

### Dark Mode

![Dashboard Home - Dark Mode](docs/screenshots/home-dark.png)
![Orders Page - Dark Mode](docs/screenshots/orders-dark.png)

## ✨ Features

### Core Functionality

- 📊 **Dashboard Overview** - Real-time stats, charts, and recent activity
- 📦 **Orders Management** - Complete order tracking with advanced filtering
- 🔍 **Advanced Search** - Real-time search across orders and customers
- 🎯 **Filtering & Sorting** - Filter by status, sort by date/amount
- 📄 **Pagination** - Efficient data pagination with customizable items per page
- 🌓 **Theme Switching** - Seamless dark/light mode with persistence
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile

### Technical Highlights

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Pixel Perfect** - Matches Figma designs with precision
- ♿ **Accessible** - ARIA roles, keyboard navigation, focus states
- 🎭 **Smooth Animations** - 60fps microinteractions with Framer Motion
- 📈 **Interactive Charts** - Data visualization with Recharts
- 🎯 **Type Safe** - Full TypeScript coverage
- 🧪 **Tested** - Unit and integration tests with Vitest

## 🛠️ Tech Stack

| Category             | Technologies                  |
| -------------------- | ----------------------------- |
| **Core**             | React 19, TypeScript, Vite    |
| **Styling**          | Tailwind CSS v4               |
| **UI Components**    | shadcn/ui (Radix UI)          |
| **State Management** | Zustand                       |
| **Animations**       | Framer Motion                 |
| **Charts**           | Recharts                      |
| **Icons**            | Lucide React                  |
| **Testing**          | Vitest, React Testing Library |

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/juspay-assignment.git
   cd juspay-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Navigation

- **Default Dashboard** - Click "Default" in sidebar to view the main dashboard
- **Orders Page** - Click "Orders" in sidebar to manage orders
- **Theme Toggle** - Click the sun/moon icon in the top bar

### Orders Management

- **Search** - Type in the search bar to filter by order number or customer name
- **Filter by Status** - Use the status dropdown to filter orders (Completed, Pending, etc.)
- **Sort Orders** - Sort by date or amount (ascending/descending)
- **Pagination** - Navigate between pages and adjust items per page

## 🏗️ Project Structure

```
juspay-assignment/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Layout components (Sidebar, TopBar, etc.)
│   │   ├── charts/          # Chart components
│   │   ├── dashboard/       # Dashboard widgets
│   │   ├── orders/          # Orders page components
│   │   └── theme-provider.tsx
│   ├── pages/
│   │   ├── HomePage.tsx     # Main dashboard page
│   │   └── OrdersPage.tsx   # Orders management page
│   ├── store/
│   │   └── useStore.ts      # Zustand store
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── postcss.config.js
```

## 🎨 Design Decisions

### Tailwind CSS v4

- Chose Tailwind CSS v4 for its new `@theme` directive, eliminating the need for a config file
- All design tokens are defined directly in CSS using CSS variables
- Cleaner, more maintainable approach to theming

### shadcn/ui Components

- Built on Radix UI primitives for excellent accessibility
- Components live in the codebase for full customization
- Perfect for achieving pixel-perfect designs
- Excellent TypeScript support

### Zustand for State Management

- Lightweight alternative to Redux (< 1KB)
- Simple, intuitive API
- Built-in persistence middleware for theme and filters
- No boilerplate required

### Framer Motion for Animations

- Declarative animations with minimal code
- Excellent performance (60fps)
- Layout animations for smooth transitions
- Spring-based physics for natural motion

## 🚧 Challenges & Solutions

### Challenge 1: Tailwind CSS v4 Migration

**Problem:** Tailwind CSS v4 has breaking changes from v3  
**Solution:** Adopted the new `@theme` directive and `@import "tailwindcss"` syntax, removing the need for a config file entirely

### Challenge 2: Responsive Sidebar

**Problem:** Sidebar needs to be fixed on desktop but collapsible on mobile  
**Solution:** Implemented an overlay system with AnimatePresence from Framer Motion, combined with Tailwind's responsive utilities

### Challenge 3: Complex State Management

**Problem:** Managing filters, search, sorting, and pagination across the Orders page  
**Solution:** Used Zustand with computed selectors and memoization to prevent unnecessary re-renders

### Challenge 4: Type-Safe Components

**Problem:** Maintaining type safety across deeply nested component props  
**Solution:** Leveraged TypeScript's utility types and strict typing throughout the component tree

## 🔄 Future Improvements

- [ ] Add backend API integration
- [ ] Implement real-time updates with WebSockets
- [ ] Add data export functionality (CSV, PDF)
- [ ] Implement advanced analytics dashboard
- [ ] Add user authentication and authorization
- [ ] Create admin panel for user management
- [ ] Add E2E tests with Cypress
- [ ] Implement service worker for offline support
- [ ] Add internationalization (i18n)
- [ ] Performance optimization with React Server Components

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS dashboards
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Charts from [Recharts](https://recharts.org)

---

Built with ❤️ for the Juspay UI Developer Assignment
