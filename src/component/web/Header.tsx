'use client';

import { SidebarContext } from "@/app/page";
import React from "react";

export default function Header() {

    const context = React.useContext(SidebarContext);

  return (
    <div className="bg-blue-400 p-4 flex justify-center">
      <div className="max-w-[1600px] w-full flex-row flex items-center justify-between">
        <h1 className="text-xl text-white">DNA PDF Generator</h1>
        <button className="lg:hidden text-white text-lg" onClick={() => {
            context.setIsOpen(!context.isOpen);
        }}><i className={`fa ${context.isOpen ? 'fa-times' : 'fa-bars'}`}></i></button>
      </div>
    </div>
  );
}
