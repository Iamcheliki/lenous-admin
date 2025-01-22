"use client";

import { formatAddress } from "@/utils";
import { useSelector } from "react-redux";

export default function HomeDepositStats() {
  const { depositList } = useSelector((state: any) => state.deposit);
  console.log("deposit list", depositList);
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-[3px] border-b-black border-b-solid">
          <th className="text-sm text-left pb-2">ID</th>
          <th className="text-sm text-left pb-2">Address</th>
          <th className="text-sm text-left pb-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {depositList.map((item: any, index: number) => (
          <tr key={item.traderAddress + index}>
            <th className="text-md text-left py-2">{index}</th>
            <th className="text-md text-left py-2">
              {formatAddress(item.traderAddress)}
            </th>
            <th className="text-md text-left py-2">$ +{item.amount}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
