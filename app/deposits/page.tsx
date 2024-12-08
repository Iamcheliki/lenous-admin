import DepositList from "@/components/depositPage/depositList";

export default function Deposits() {
  return (
    <section>
      <div className="w-full p-5 bg-white rounded-2xl">
        <h1 className="text-lg font-bold mb-5">Deposits</h1>
        <DepositList />
      </div>
    </section>
  );
}
