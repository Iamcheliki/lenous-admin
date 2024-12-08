import UserList from "@/components/userPage/userList";

export default function Users() {
  return (
    <section>
      <div className="w-full p-5 bg-white rounded-2xl">
        <h1 className="text-lg font-bold mb-5">Users</h1>
        <UserList />
      </div>
    </section>
  );
}
