"use client";

import { Log, LogType } from "@/redux/slices/eventSlice";
import { formatId } from "@/utils";
import { useSelector } from "react-redux";

export default function EventLog() {
  const { logs } = useSelector((state: any) => state.event);

  return (
    <section className="flex flex-col p-5 w-[30%] flex-shrink-0 bg-white rounded-2xl h-[40vh]">
      <h3 className="text-lg font-bold mb-5">Events</h3>
      <div className="max-h-[35vh] overflow-y-auto customScroll">
        {logs.map((item: Log, index: number) => (
          <div key={item.date + index} className="flex flex-col">
            <h3 className="text-md font-bold flex-shrink-0">{item.type}</h3>
            <p className="">
              {item.type === LogType.DEPOSIT
                ? `Deposit $${item.data.amount}`
                : item.type === LogType.WITHDRAW
                ? `Withdraw $${item.data.amount}`
                : item.type === LogType.LP_DEPOST
                ? `Deposit $${item.data.usdcAmount} into lp`
                : item.type === LogType.ORDER_LIQUID
                ? `Order ${formatId(item.data.orderId)} liquided`
                : item.type === LogType.ORDER_MATCH
                ? `Order ${item.data.orderId} match`
                : item.type === LogType.ORDER_PLACE
                ? `New Order placed`
                : item.type === LogType.ORDER_SL_TP
                ? `Order ${item.data.orderId} close`
                : ""}
              -{item.date}`
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
