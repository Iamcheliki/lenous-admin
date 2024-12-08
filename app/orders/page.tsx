import OrderList from "@/components/orderPage/orderList";

export default function Orders() {
  return (
    <section>
      <div className="w-full p-5 bg-white rounded-2xl">
        <h1 className="text-lg font-bold mb-5">Orders</h1>
        <OrderList />
      </div>
    </section>
  );
}
