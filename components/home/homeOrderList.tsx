export default function HomeOrderList() {
  return (
    <table>
      <thead>
        <tr className="border-b-[3px] border-b-black border-b-solid">
          <th className="text-sm text-left pb-2">ID</th>
          <th className="text-sm text-left pb-2">Token</th>
          <th className="text-sm text-left pb-2">Type</th>
          <th className="text-sm text-left pb-2">Buy/Sell</th>
          <th className="text-sm text-left pb-2">Unit</th>
          <th className="text-sm text-left pb-2">Price</th>
          <th className="text-sm text-left pb-2">Amount</th>
          <th className="text-sm text-left pb-2">PNL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-md text-left py-2">1</th>
          <th className="text-md text-left py-2">Bictoin</th>
          <th className="text-md text-left py-2">Limit</th>
          <th className="text-md text-left py-2">Buy</th>
          <th className="text-md text-left py-2">0.001</th>
          <th className="text-md text-left py-2">$97980</th>
          <th className="text-md text-left py-2">&97.9</th>
          <th className="text-md text-left py-2">3%</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">2</th>
          <th className="text-md text-left py-2">Bictoin</th>
          <th className="text-md text-left py-2">Limit</th>
          <th className="text-md text-left py-2">Buy</th>
          <th className="text-md text-left py-2">0.001</th>
          <th className="text-md text-left py-2">$97980</th>
          <th className="text-md text-left py-2">&97.9</th>
          <th className="text-md text-left py-2">3%</th>
        </tr>
        <tr>
          <th className="text-md text-left py-2">3</th>
          <th className="text-md text-left py-2">Bictoin</th>
          <th className="text-md text-left py-2">Limit</th>
          <th className="text-md text-left py-2">Buy</th>
          <th className="text-md text-left py-2">0.001</th>
          <th className="text-md text-left py-2">$97980</th>
          <th className="text-md text-left py-2">&97.9</th>
          <th className="text-md text-left py-2">3%</th>
        </tr>
      </tbody>
    </table>
  );
}
