"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { setOpenOrders } from "@/redux/slices/orderSlice";

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const [connected, setConnected] = useState<boolean>(false);
  const socketRef = useRef<any>(null);
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io("http://localhost:3000");
      socketRef.current.on("connect", () => {
        console.log("connected to socket");
        setConnected(true);
      });
      socketRef.current.on("disconnect", () => {
        setConnected(false);
      });
      socketRef.current.on("live_positions", (data: any) => {
        dispatch(setOpenOrders([...data.positions]));
      });
    }
  }, []);

  useEffect(() => {
    if (connected) {
      const token = Cookies.get("token");
      socketRef.current.emit("regiester_admin", token);
    }
  }, [connected]);

  return <div>{children}</div>;
}
