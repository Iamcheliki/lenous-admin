"use client";

import { createNewLp, getLpList } from "@/serverFunctions/lpRequests";
import { convertToNumber } from "@/utils";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function LpManager() {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    fetchLps();
  }, []);

  const fetchLps = () => {
    getLpList()
      .then((res) => {
        console.log("lp list", res.data);
        setList([...res.data.lpList]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNewLp = () => {
    createNewLp()
      .then((res) => {
        console.log(res);
        toast.success("New Liquididty Pool created!");
        fetchLps();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong! Please try again");
      });
  };
  return (
    <section>
      <div className="w-full p-5 bg-white rounded-2xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-lg font-bold">Lp Manager</h1>
          <button
            onClick={handleNewLp}
            className="bg-primary px-4 h-[40px] text-white rounded-lg"
          >
            Set new Liquidity Pool
          </button>
        </div>
        {list.length === 0 ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-medium">No Liquidity pool yet!</p>
            <button
              onClick={handleNewLp}
              className="bg-primary px-4 h-[40px] text-white rounded-lg"
            >
              Set new Liquidity Pool
            </button>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-xl font-bold">
                <td className="pb-6 w-[5%]">No</td>
                <td className="pb-6 w-[20%]">Name</td>
                <td className="pb-6 w-[15%] text-center">Total Liqudidty</td>
                <td className="pb-6 w-[15%] text-center">Total Token</td>
                <td className="pb-6 w-[15%] text-center">Realized PNL</td>
                <td className="pb-6 w-[15%] text-center">Unrealized Pnl</td>
                <td className="pb-6 w-[15%] text-center">Created at:</td>
              </tr>
            </thead>
            <tbody>
              {list.map((item: any) => (
                <tr key={item._id} className="text-md font-normal">
                  <td>{item.id}</td>
                  <td>Liquidity pool No {item.id}</td>
                  <td className="text-center">
                    {convertToNumber(item.totalLiqudidty)}
                  </td>
                  <td className="text-center">{item.totalToken}</td>
                  <td className="text-center">{item.totalRealizedPnl}</td>
                  <td className="text-center">{item.totalUnrealizedPnl}</td>
                  <td className="text-center">
                    {new Date(item.creationDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
