"use client";

import { useSelector } from "react-redux";

export default function HomeLPStats() {
  const { lpData } = useSelector((state: any) => state.lp);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Liquidity</h4>
        <p className="text-lg font-bold">${lpData.totalLiquidity}</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Token</h4>
        <p className="text-lg font-bold">${lpData.totalToken}</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Unrealized PNL</h4>
        <p className="text-lg font-bold">${lpData.totalUnrealizedPnl}</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Realized PNL</h4>
        <p className="text-lg font-bold">${lpData.totalRealizedPnl}</p>
      </div>
    </div>
  );
}
