"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { setOpenOrders } from "@/redux/slices/orderSlice";
import { setActiveUser } from "@/redux/slices/clientSlice";
import { toast } from "react-toastify";
import { convertToNumber, formatAddress } from "@/utils";
import { LogType, setLogList } from "@/redux/slices/eventSlice";
import { setLpData } from "@/redux/slices/lpSlice";
import { BASE_SOCKET_URL } from "@/constant";

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
      console.log("hello to socket");
      socketRef.current = io(BASE_SOCKET_URL);
      socketRef.current.on("connect", () => {
        console.log("connected to socket");
        setConnected(true);
      });
      socketRef.current.on("disconnect", () => {
        setConnected(false);
      });
      socketRef.current.on("live_positions", (data: any) => {
        // console.log("live positions", data);
        dispatch(setOpenOrders([...data.positions]));
      });
      socketRef.current.on("active_users", (data: any) => {
        // console.log("active users", data);
        dispatch(setActiveUser([...data]));
      });
      socketRef.current.on("deposit", (data: any) => {
        console.log("deposit", data);
        toast.success(
          `New Deposit form ${formatAddress(
            data.address
          )} with the amount of ${convertToNumber(data.amount)}`
        );
        dispatch(
          setLogList({
            type: LogType.DEPOSIT,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
        );
      });
      socketRef.current.on("orderPlaced", (data: any) => {
        console.log("Order message received from new socket", data);
        toast.success(
          `Trader ${formatAddress(data.trader)} placed a ${
            data.type
          } with the amount of ${convertToNumber(
            data.amount
          )} and the price $${convertToNumber(data.price)}`
        );
        dispatch(
          setLogList({
            type: LogType.ORDER_PLACE,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
        );
      });
      socketRef.current.on("orderMatched", (data: any) => {
        console.log("Match message received from new socket", data);
        toast.success(
          `Order ${formatAddress(data.sellOrderId)} matched with order ${
            data.buyOrderId
          } with the price $${convertToNumber(data.price)}`
        );
        dispatch(
          setLogList({
            type: LogType.ORDER_MATCH,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
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
        dispatch(
          setLogList({
            type: LogType.ORDER_FILL_LP,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
        );
      });

      socketRef.current.on("orderLiquided", (data: any) => {
        console.log("Liquid message received form socket", data);
        toast.warning(`Order ${data.orderId} Liquided`);
        dispatch(
          setLogList({
            type: LogType.ORDER_LIQUID,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
        );
      });

      socketRef.current.on("orderSlTpClose", (data: any) => {
        console.log("Close message received form socket", data);
        toast.warning(`Order ${data.orderId} Closed with Sl/Tp hit`);
        dispatch(
          setLogList({
            type: LogType.ORDER_SL_TP,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
        );
      });

      socketRef.current.on("lpDeposit", (data: any) => {
        console.log("lp deposit", data);
        toast.success(
          `New Deposit form ${formatAddress(
            data.address
          )} with the amount of ${convertToNumber(data.usdcAmount)} into LP`
        );
        dispatch(
          setLogList({
            type: LogType.LP_DEPOST,
            data: data,
            date: new Date().toLocaleTimeString(),
          })
        );
      });

      socketRef.current.on("lpStats", (data: any) => {
        console.log("lp_stats", data);
        dispatch(setLpData(data));
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
