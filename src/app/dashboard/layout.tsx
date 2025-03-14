import Sidebar from "@/components/dashboard/Sidebar";
import { STUDENTS_MENU } from "@/data/school_management_data";
import { ADMINS_MENU } from "@/data/school_management_data";
import { TEACHERS_MENU } from "@/data/school_management_data";
import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full">
      {/* left side*/}
      <div className="w-[15%]">
        <Sidebar menu={ADMINS_MENU} />
      </div>
      {/* right side*/}
      <div className="w-[85%] flex flex-col gap-5">
        <Navbar name={"Aditya"} role={"Admin"} image={""} search={false} />
        {children}
      </div>
    </div>
  );
}
