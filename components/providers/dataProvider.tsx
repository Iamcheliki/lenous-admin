"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { setOpenOrders } from "@/redux/slices/orderSlice";
import { setActiveUser } from "@/redux/slices/clientSlice";
import { toast } from "react-toastify";
import { convertToNumber, formatAddress } from "@/utils";

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const [connected, setConnected] = useState<boolean>(false);
  const socketRef = useRef<any>(null);
  const { isLogin } = useSelector((state: any) => state.user);
  useEffect(() => {
    if (!socketRef.current && isLogin) {
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
      socketRef.current.on("active_users", (data: any) => {
        dispatch(setActiveUser([...data]));
      });
      socketRef.current.on("deposit", (data: any) => {
        console.log("deposit", data);
        toast.success(
          `New Deposit form ${formatAddress(
            data.address
          )} with the amount of ${convertToNumber(data.amount)}`
        );
      });
      socketRef.current.on("orderPlaced", (data: any) => {
        console.log("Order message received from new socket", data);
        toast.success(
          `Trader ${formatAddress(data.address)} placed a ${
            data.type
          } with the amount of ${convertToNumber(
            data.amount
          )} and the price $${convertToNumber(data.price)}`
        );
      });
      socketRef.current.on("orderMatched", (data: any) => {
        console.log("Match message received from new socket", data);
        toast.success(
          `Order ${formatAddress(data.sellOrderId)} matched with order ${
            data.buyOrderId
          } with the price $${convertToNumber(data.price)}`
        );
      });
      socketRef.current.on("orderFilledByLp", (data: any) => {
        console.log("Filled message received form new socket", data);
        toast.success(
          `Order ${formatAddress(
            data.orderId
          )} filled by LP in the amount of ${convertToNumber(
            data.amount
          )} and the price of${convertToNumber(data.price)}`
        );
      });
    }
  }, [isLogin]);

  useEffect(() => {
    if (connected) {
      const token = Cookies.get("token");
      socketRef.current.emit("regiester_admin", token);
    }
  }, [connected]);

  return <div>{children}</div>;
}
