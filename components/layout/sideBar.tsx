"use client";

import { SideBarMenu } from "@/types/layout";
import data from "../../data/sideBar.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setIsLogin } from "@/redux/slices/userSlice";

export default function SideBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setIsLogin(false));
    router.push("/auth/login");
  };
  return (
    <div className="w-[15vw] bg-white p-10 h-[100vh] flex flex-col flex-shrink-0">
      <h2 className="text-xl font-bold italic mb-10">Lenous Admin Panel</h2>
      <ul>
        {data.sideBar.map((item: SideBarMenu) => (
          <li key={item.id} className="py-3">
            <Link href={item.url}>
              <p className="text-md font-medium">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="bg-primary mt-auto h-10 rounded-2xl hover:scale-[1.05] font-bold duration-300"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}
