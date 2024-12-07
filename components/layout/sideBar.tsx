import { SideBarMenu } from "@/types/layout";
import data from "../../data/sideBar.json";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-[15vw] bg-white p-10 h-[100vh] fixed top-0 left-0">
      <h2 className="text-xl font-bold italic mb-10">Lenous Admin Panel</h2>
      <ul>
        {data.sideBar.map((item: SideBarMenu) => (
          <li key={item.id} className="py-3">
            <Link href={item.url}>
              <p className="text-md font-medium">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
