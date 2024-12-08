export default function HomeDepositStats() {
  return (
    <table>
      <thead>
        <tr className="border-b-[3px] border-b-black border-b-solid">
          <th className="text-sm text-left pb-2">ID</th>
          <th className="text-sm text-left pb-2">Address</th>
          <th className="text-sm text-left pb-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-md text-left py-2">1</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">$ +200</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">2</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">$ -250</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">3</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">$ +129</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">4</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">$ +800</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">5</th>
          <th className="text-md text-left py-2">0x96bB...26a4</th>
          <th className="text-md text-left py-2">$ -100</th>
        </tr>
      </tbody>
    </table>
  );
}
