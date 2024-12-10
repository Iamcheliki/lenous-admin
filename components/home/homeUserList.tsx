"use client";

import { convertToNumber, formatAddress } from "@/utils";
import { useSelector } from "react-redux";

export default function HomeUserList() {
  const { activeUsers } = useSelector((state: any) => state.client);
  console.log("home user", activeUsers);
  return (
    <table>
      <thead>
        <tr className="border-b-[3px] border-b-black border-b-solid">
          <th className="text-sm text-left pb-2">ID</th>
          <th className="text-sm text-left pb-2">Address</th>
          <th className="text-sm text-left pb-2">PNL</th>
          <th className="text-sm text-left pb-2">Balance</th>
          <th className="text-sm text-left pb-2">Free Margin</th>
        </tr>
      </thead>
      <tbody>
        {activeUsers.map((user: any, index: number) => (
          <tr key={user.address}>
            <th className="text-md text-left py-2">{index}</th>
            <th className="text-md text-left py-2">
              {formatAddress(user.address)}
            </th>
            <th
              className={`text-md text-left py-2 ${
                user.totalPnl > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              $ {user.totalPnl.toFixed(4)}
            </th>
            <th className="text-md text-left py-2">
              $ {convertToNumber(user.totalBalance).toFixed(4)}
            </th>
            <th
              className={`text-md text-left py-2 ${
                user.freeMargin > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              $ {convertToNumber(user.freeMargin).toFixed(4)}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
