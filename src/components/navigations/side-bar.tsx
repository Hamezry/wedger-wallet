"use client";
import { useState } from "react";
import { Element3, Card, DocumentText, Setting2 } from "iconsax-react";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", icon: Element3, path: "/" },
  { name: "Transactions", icon: Card, path: "#" },
  { name: "Reports", icon: DocumentText, path: "#" },
  { name: "Settings", icon: Setting2, path: "#" },
];

export default function Sidebar() {
  const [active, setActive] = useState("/");

  return (
    <aside className="w-72 h-screen bg-white py-4 px-5 ">
      <nav className="flex flex-col gap-2">
        {menuItems.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            onClick={() => setActive(path)}
            className={`flex  text-sm gap-3 py-1 px-4 rounded-3xl transition-colors ${
              active === path
                ? "bg-[#dde5e7] rounded-full text-[#3A6C7B]"
                : "hover:bg-gray-100 text-[#1B2528]"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

