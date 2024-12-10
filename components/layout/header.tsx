"use client";

import { useSelector } from "react-redux";

export default function Header() {
  const { userName } = useSelector((state: any) => state.user);
  return (
    <div className="h-32 bg-white w-full rounded-2xl p-5 flex-shrink-0">
      <h2>{userName}</h2>
    </div>
  );
}
