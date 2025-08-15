"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Megaphone,
  BarChart3,
  Settings,
  Car,
  TrendingUp,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Campaigns",
    href: "/admin/campaigns",
    icon: Megaphone,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold text-white">Radz Admin</span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                )}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-medium text-white">A</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">admin@radz.pk</p>
          </div>
        </div>
      </div>
    </div>
  )
}