export default function UserList() {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-[3px] border-b-black border-b-solid">
          <th className="text-sm text-left pb-2">ID</th>
          <th className="text-sm text-left pb-2">Address</th>
          <th className="text-sm text-left pb-2">PNL</th>
          <th className="text-sm text-left pb-2">Balance</th>
          <th className="text-sm text-left pb-2">Deposit</th>
          <th className="text-sm text-left pb-2">Withdraw</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-md text-left py-2">1</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">10%</th>
          <th className="text-md text-left py-2">$27000</th>
          <th className="text-md text-left py-2">$24300</th>
          <th className="text-md text-left py-2">$10000</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">2</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">10%</th>
          <th className="text-md text-left py-2">$27000</th>
          <th className="text-md text-left py-2">$24300</th>
          <th className="text-md text-left py-2">$10000</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">3</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">10%</th>
          <th className="text-md text-left py-2">$27000</th>
          <th className="text-md text-left py-2">$24300</th>
          <th className="text-md text-left py-2">$10000</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">4</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">10%</th>
          <th className="text-md text-left py-2">$27000</th>
          <th className="text-md text-left py-2">$24300</th>
          <th className="text-md text-left py-2">$10000</th>
        </tr>
      </tbody>
    </table>
  );
}
