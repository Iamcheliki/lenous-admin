"use client";

import React, { useEffect } from "react";
import SideBar from "./sideBar";
import { usePathname, useRouter } from "next/navigation";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_BACK_URL } from "@/constant";
import { setIsLogin } from "@/redux/slices/userSlice";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: any) => state.user);
  console.log("user login", isLogin);

  useEffect(() => {
    if (Cookies.get("token")) {
      axios
        .get(`${BASE_BACK_URL}/admin/get-profile`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch(setIsLogin(true));
        })
        .catch((err) => {
          console.log(err);
          Cookies.remove("token");
          dispatch(setIsLogin(true));
        });
    } else {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    if (pathName.includes("auth")) {
      if (isLogin) {
        router.push("/");
      }
    } else {
      if (!isLogin) {
        console.log("route to login");
        router.push("/auth/login");
      }
    }
  }, [pathName]);
  return (
    <div className="w-[100vw] h-[100vh] bg-secondary flex">
      {!pathName.includes("auth") && <SideBar />}
      <div className="flex-grow flex flex-col gap-10 overflow-y-auto min-h-[100vh] p-10 customScroll">
        {!pathName.includes("auth") && <Header />}
        {children}
      </div>
    </div>
  );
}
