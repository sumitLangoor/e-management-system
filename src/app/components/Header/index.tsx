"use client";

import { useState } from "react";
import {
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  UserPlus,
  Building2,
  BarChart3,
  Clock3,
  Umbrella,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  X,
  type LucideIcon,
} from "lucide-react";

export interface MenuItem {
  title: string;
  icon: LucideIcon;
}

export const menuItems: MenuItem[] = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Employees", icon: Users },
  { title: "Add Employee", icon: UserPlus },
  { title: "Departments", icon: Building2 },
  { title: "Reports", icon: BarChart3 },
  { title: "Attendance", icon: Clock3 },
  { title: "Leave Management", icon: Umbrella },
  { title: "Documents", icon: FileText },
  { title: "User Management", icon: ClipboardList },
  { title: "Settings", icon: Settings },
  { title: "Logout", icon: LogOut },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <header className={`relative w-full shrink-0 bg-gradient-to-b from-[#203957] via-[#202c3a] to-[#202020] text-white transition-[width] duration-300 ease-in-out md:min-h-screen ${isCollapsed ? "md:w-28" : "md:w-72"}`}>
      <div className={`flex min-h-16 items-center justify-between border-b border-white/10 px-5 md:min-h-20 ${isCollapsed ? "md:justify-center md:px-0" : ""}`}>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <LayoutGrid className="size-8 shrink-0" aria-hidden="true" />
          <span className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ${isCollapsed ? "max-w-0 opacity-0 md:max-w-0" : "max-w-20 opacity-100"}`}>EMS</span>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <button
        type="button"
        className="absolute right-0 z-10 hidden size-12 translate-x-1/2 justify-center rounded-full bg-[#202020] text-white shadow-lg hover:bg-[#343434] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex"
        style={{ top: "50%" }}
        aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
        aria-expanded={!isCollapsed}
        onClick={() => setIsCollapsed((collapsed) => !collapsed)}
      >
        {isCollapsed ? <ChevronRight aria-hidden="true" /> : <ChevronLeft aria-hidden="true" />}
      </button>

      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        className={`grid overflow-hidden px-1 transition-[grid-template-rows,opacity] duration-300 ease-in-out md:grid-rows-[1fr] md:overflow-visible md:py-4 md:opacity-100 ${isMenuOpen ? "grid-rows-[1fr] py-3 opacity-100" : "grid-rows-[0fr] py-0 opacity-0 md:py-4 md:opacity-100"} ${isCollapsed ? "md:px-0" : ""}`}
      >
        <ul className="min-h-0 flex flex-col gap-1 overflow-hidden md:overflow-visible">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.title === "Dashboard";

            return (
              <li key={item.title}>
              <button
                type="button"
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-14 w-full items-center gap-4 border-l-4 text-left text-base font-semibold transition-[background-color,border-color,padding] duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${isCollapsed ? "justify-center px-0 md:gap-0" : "px-5"} ${isActive ? "border-white bg-[#40536d]" : "border-transparent hover:bg-white/10"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className={`size-6 shrink-0 ${isActive ? "text-sky-400" : "text-white"}`} aria-hidden="true" />
                <span className={`overflow-hidden whitespace-nowrap transition-[max-width,opacity] duration-300 ${isCollapsed ? "max-w-0 opacity-0 md:max-w-0" : "max-w-56 opacity-100"}`}>{item.title}</span>
              </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
