export const metadata = {
  title: "Go Rental PDF Generator",
  description: "This is a PDF generator for Go Rentals",
};
import { AppProvider } from "@/component/context/context";
import Header from "@/component/web/Header";
import SideBar from "@/component/web/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="justify-center flex h-full">
        <div className="flex flex-row max-w-[1600px] h-full w-full ">
          <SideBar />
          <main className="p-12 text-gray-600 w-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
