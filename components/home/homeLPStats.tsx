export default function HomeLPStats() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Liquidity</h4>
        <p className="text-lg font-bold">$105000</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Deposit</h4>
        <p className="text-lg font-bold">$89000</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total generated tokens</h4>
        <p className="text-lg font-bold">2875</p>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-md font-medium">Total Income</h4>
        <p className="text-lg font-bold">$16000</p>
      </div>
    </div>
  );
}
