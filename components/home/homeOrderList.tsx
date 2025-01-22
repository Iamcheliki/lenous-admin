"use client";

import { useSelector } from "react-redux";

export default function HomeOrderList() {
  const { openOrders } = useSelector((state: any) => state.order);

  return (
    <table>
      <thead>
        <tr className="border-b-[3px] border-b-black border-b-solid">
          <th className="text-sm text-left pb-2">ID</th>
          <th className="text-sm text-left pb-2">Token</th>
          <th className="text-sm text-left pb-2">Type</th>
          <th className="text-sm text-left pb-2">Buy/Sell</th>
          <th className="text-sm text-left pb-2">Unit</th>
          <th className="text-sm text-left pb-2">Price</th>
          <th className="text-sm text-left pb-2">Amount</th>
          <th className="text-sm text-left pb-2">PNL</th>
        </tr>
      </thead>
      <tbody>
        {openOrders.map((order: any, index: number) => (
          <tr key={order.id}>
            <th className="text-md text-left py-2">{index}</th>
            <th className="text-md text-left py-2">Bictoin</th>
            <th className="text-md text-left py-2">{order.type}</th>
            <th className="text-md text-left py-2">---</th>
            <th className="text-md text-left py-2">
              {order.amount.toFixed(4)}
            </th>
            <th className="text-md text-left py-2">{order.price.toFixed(4)}</th>
            <th className="text-md text-left py-2">
              {(order.amount * order.price).toFixed(4)}
            </th>
            <th
              className={`text-md text-left py-2 ${
                order.unrealizedPnl > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {order.unrealizedPnl}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
