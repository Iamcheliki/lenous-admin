import HomeDepositStats from "@/components/home/homeDepositStats";
import HomeLPStats from "@/components/home/homeLPStats";
import HomeOrderList from "@/components/home/homeOrderList";
import HomeUserList from "@/components/home/homeUserList";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        <div className="w-full flex items-center gap-5">
          <div className="flex items-center justify-center flex-grow flex-shrink-0 bg-white rounded-2xl min-h-[40vh]">
            <h3 className="text-lg font-bold">Chart</h3>
          </div>
          <div className="flex flex-col p-5 w-[30%] flex-shrink-0 bg-white rounded-2xl min-h-[40vh]">
            <h3 className="text-lg font-bold mb-5">Stats</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="text-md font-medium">Total User</h4>
                <p className="text-lg font-bold">165</p>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-md font-medium">Total Deposit</h4>
                <p className="text-lg font-bold">$267000</p>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-md font-medium">Total Orders</h4>
                <p className="text-lg font-bold">2798</p>
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-md font-medium">Total Withdraw</h4>
                <p className="text-lg font-bold">$129870</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="flex flex-col flex-grow p-5 flex-shrink-0 bg-white rounded-2xl min-h-[40vh]">
            <h3 className="text-lg font-bold mb-5">Last Orders</h3>
            <HomeOrderList />
          </div>
          <div className="flex flex-col p-5 w-[30%] flex-shrink-0 bg-white rounded-2xl min-h-[40vh]">
            <h3 className="text-lg font-bold mb-5">LP Stats</h3>
            <HomeLPStats />
          </div>
        </div>
        <div className="w-full flex items-center gap-5">
          <div className="flex flex-col p-5 flex-grow flex-shrink-0 bg-white rounded-2xl min-h-[40vh]">
            <h3 className="text-lg font-bold mb-5">Users</h3>
            <HomeUserList />
          </div>
          <div className="flex flex-col p-5 w-[30%] flex-shrink-0 bg-white rounded-2xl min-h-[40vh]">
            <h3 className="text-lg font-bold mb-5">Depsoits and Withdraws</h3>
            <HomeDepositStats />
          </div>
        </div>
      </div>
    </div>
  );
}
