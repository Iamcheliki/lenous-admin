"use client";

import React from "react";
import SideBar from "./sideBar";
import { usePathname } from "next/navigation";
import Header from "./header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div className="w-[100vw] bg-secondary flex">
      {!pathName.includes("auth") && <SideBar />}
      <div className="flex-grow overflow-y-auto min-h-[100vh] p-10">
        {!pathName.includes("auth") && <Header />}
        {children}
      </div>
    </div>
  );
}
