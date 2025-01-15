"use client";

import { convertToNumber } from "@/utils";
import { useSelector } from "react-redux";

export default function HomeLPStats() {
  const { lpData } = useSelector((state: any) => state.lp);
  console.log(lpData);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Liquidity</h4>
        <p className="text-lg font-bold">
          ${convertToNumber(lpData.totalLiquidity).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Token</h4>
        <p className="text-lg font-bold">
          ${convertToNumber(lpData.totalToken).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Unrealized PNL</h4>
        <p className="text-lg font-bold">
          ${+lpData.totalUnrealizedPnl.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Realized PNL</h4>
        <p className="text-lg font-bold">
          ${+lpData.totalRealizedPnl.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
