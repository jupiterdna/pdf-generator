"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useContext } from "react";
import { SidebarContext } from "../context/context";

export default function SideBar() {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const sidebarOpen = searchParams?.get("sidebar");

  const cls = sidebarOpen ? "w-[250px] h-full p-4 opacity-100 bg-gray-100 z-20" : "w-0 opacity-0";


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <aside className={`lg:p-4 fixed lg:static  lg:opacity-100 lg:w-[300px] text-gray-600 h-full border-r border-gray-100 ${cls}`}>
      <ul className="flex flex-col gap-y-1 text-lg">
        <li className={`${pathname === "/" ? "font-bold" : ""} `}>
          <Link href="/">Introduction</Link>
        </li>
        <li>
          <span className={`${pathname?.includes('usage') ? "font-bold" : ""} `}>Usage</span>
          <ul className="pl-4 text-md flex flex-col mt-2">
            <li className={`${pathname?.includes('/usage/contract') ? "font-bold" : ""} `}><Link href="/usage/contract">Contract</Link></li>
            <li className={`${pathname?.includes('/usage/receipt') ? "font-bold" : ""} `}><Link href="/usage/receipt">Receipt</Link></li>
          </ul>
        </li>
      </ul>
    </aside>
    </Suspense>
  );
}
