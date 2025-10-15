import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  UserCog,
  BookOpen,
  BarChart,
  User,
  LogOut,
  LayoutDashboard,
  UserCircle,
} from "lucide-react";
import type React from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form";

export function AppLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "admin" | "teacher" | "student";
}) {
  const location = useLocation();
  let pathname = location.pathname.slice(1);
  let idx = -1;
  const user: { name: string, avatar: string } = {
    name: role === "admin" ? "Admin" : role === "teacher" ? "Teacher" : "Tahina",
    avatar: role === "admin" ? "https://randomuser.me/api/portraits/men/40.jpg" : role === "teacher" ? "https://randomuser.me/api/portraits/men/1.jpg" : "https://randomuser.me/api/portraits/men/10.jpg"
  }

  if (pathname.includes("/")) {
    idx = pathname.indexOf("/");
  }

  const isTwoPath = idx !== -1;

  const menus = {
    admin: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
      { name: "Cours", icon: BookOpen, path: "/admin/courses" },
      { name: "Étudiants", icon: UserCog, path: "/admin/students" },
      { name: "Professeurs", icon: UserCircle, path: "/admin/teachers" },
    ],
    teacher: [
      { name: "Profil", icon: User, path: "/teacher" },
      { name: "Mes cours", icon: BookOpen, path: "/teacher/courses" },
      { name: "Mes étudiants", icon: GraduationCap, path: "/teacher/students"},
    ],
    student: [
      { name: "Profil", icon: User, path: "/student" },
      { name: "Mes cours", icon: BookOpen, path: "/student/courses" },
      { name: "Mes professeurs", icon: UserCog, path: "/student/teachers" },
      { name: "Mes notes", icon: BarChart, path: "/student/grades" },
    ],
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#F8FAFC]">
        <Sidebar className="w-64 bg-[#1E40AF] text-black">
          <SidebarHeader className="p-4">
            <span className="flex items-center gap-2">
              <img
                src="/logo_opendev.jpg"
                alt="OpenDev-logo"
                className="w-14 rounded-full"
              />
              <h1 className="text-xl font-bold tracking-tight">Omega School</h1>
            </span>
          </SidebarHeader>
          <div className="px-4">
            <Separator color="red" />
          </div>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-black mb-2 font-semibold uppercase">
                Main menu
              </SidebarGroupLabel>
              <SidebarMenu>
                {menus[role].map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        size={"md"}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center text-black gap-2 px-3 py-2 rounded-md transition-colors ${isActive
                            ? "bg-[#0a50e8] text-white"
                            : "hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                          <Icon size={40} />
                          {item.name}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 flex flex-col gap-4 border-t border-white/10">
            <SidebarOptInForm />
            <Button variant="outline" size="lg">
              <LogOut className="w-5 h-5 mr-2" /> Se déconnecter
            </Button>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="flex h-16 items-center sticky top-0 z-10 gap-4 bg-white px-4 shadow-sm">
            <div className="flex-1">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#/dashboard">
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem className="capitalize">
                    <BreadcrumbPage>
                      {isTwoPath
                        ? pathname.slice(0, idx).toLowerCase()
                        : pathname.toLowerCase()}
                    </BreadcrumbPage>
                    {isTwoPath && (
                      <>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbPage className="capitalize ml-2">
                          {pathname.slice(idx + 1).toLowerCase()}
                        </BreadcrumbPage>
                      </>
                    )}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-gray-100 px-4 py-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hidden md:block font-medium">
                  {user.name}
                </span>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
