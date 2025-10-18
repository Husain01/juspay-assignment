import { motion, AnimatePresence } from "framer-motion";
import { Bug, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "./PageLayout";

const notifications = [
  {
    id: 1,
    icon: Bug,
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
    bgColor: "#E3F5FF",
  },
  {
    id: 2,
    icon: User,
    title: "New user registered",
    time: "59 minutes ago",
    bgColor: "#E5ECF6",
  },
  {
    id: 3,
    icon: Bug,
    title: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
    bgColor: "#E3F5FF",
  },
  {
    id: 4,
    icon: User,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    bgColor: "#E5ECF6",
  },
];

const activities = [
  {
    id: 1,
    user: "You have a bug that needs...",
    time: "Just now",
    avatar: "/avatar-male07.png",
    bgColor: "#4CAF50",
  },
  {
    id: 2,
    user: "Released a new version",
    time: "59 minutes ago",
    avatar: "/avatar-female05.png",
    bgColor: "#8D6E63",
  },
  {
    id: 3,
    user: "Submitted a bug",
    time: "12 hours ago",
    avatar: "/avatar-male11.png",
    bgColor: "#2196F3",
  },
  {
    id: 4,
    user: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    avatar: "/avatar-3d05.png",
    bgColor: "#616161",
  },
  {
    id: 5,
    user: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    avatar: "/avatar-3d08.png",
    bgColor: "#616161",
  },
];

const contacts = [
  { id: 1, name: "Natali Craig", avatar: "/avatar-female05.png" },
  { id: 2, name: "Drew Cano", avatar: "/avatar-male07.png" },
  { id: 3, name: "Orlando Diggs", avatar: "/avatar-male11.png" },
  { id: 4, name: "Andi Lane", avatar: "/avatar-3d05.png" },
  { id: 5, name: "Kate Morrison", avatar: "/avatar-3d08.png" },
  { id: 6, name: "Koray Okumus", avatar: "/avatar-male07.png" },
];

export function SidebarRight() {
  const { rightSidebarOpen } = useSidebar();

  return (
    <AnimatePresence mode="wait">
      {rightSidebarOpen && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 280 }}
          exit={{ width: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1],
            type: "tween",
          }}
          className="h-full overflow-hidden sticky top-0"
          style={{ borderLeft: "1px solid rgba(28, 28, 28, 0.1)" }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h3 className="h-16  flex items-center px-6 text-sm font-semibold text-[#1C1C1C]">
              Notifications
            </h3>
            <div className="space-y-6 p-4 overflow-y-auto max-h-[calc(100vh-64px)]">
              {/* Notifications Section */}
              <div>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-[rgba(28,28,28,0.05)]"
                    >
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ backgroundColor: notification.bgColor }}
                      >
                        <notification.icon className="h-4 w-4 text-[#1C1C1C]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-normal text-[#1C1C1C] leading-tight">
                          {notification.title}
                        </p>
                        <p
                          className="text-xs font-normal mt-1"
                          style={{ color: "rgba(28, 28, 28, 0.4)" }}
                        >
                          {notification.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Activities Section */}
              <div>
                <h3 className="text-sm font-semibold text-[#1C1C1C] mb-4">
                  Activities
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div
                    className="absolute left-4 top-0 bottom-0 w-px"
                    style={{ backgroundColor: "rgba(28, 28, 28, 0.1)" }}
                  />

                  <div className="space-y-3">
                    {activities.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        whileHover={{ scale: 1.02 }}
                        className="relative flex items-start gap-3"
                      >
                        {/* Avatar with timeline connection */}
                        <div className="relative flex-shrink-0">
                          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={activity.avatar} />
                              <AvatarFallback className="text-xs text-white">
                                U
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </div>

                        {/* Activity content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-normal text-[#1C1C1C] leading-tight">
                            {activity.user}
                          </p>
                          <p
                            className="text-xs font-normal mt-1"
                            style={{ color: "rgba(28, 28, 28, 0.4)" }}
                          >
                            {activity.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contacts Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-[#1C1C1C]">
                    Contacts
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {contacts.map((contact) => (
                    <motion.div
                      key={contact.id}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback className="text-sm">
                          {contact.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-xs font-normal text-[#1C1C1C] mt-1 text-center">
                        {contact.name.split(" ")[0]}
                      </p>
                    </motion.div>
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
