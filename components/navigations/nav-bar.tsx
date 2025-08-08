import Image from "next/image";
import logo from "@@/public/logo (1).svg";
import profile from "@@/public/profile.svg";
import { HambergerMenu, SearchNormal1 } from "iconsax-react";
import { BsGrid } from "react-icons/bs";
export default function Navbar() {
  return (
    <header className="bg-white px-6 py-2 flex justify-between items-center">
      <div className=" flex items-center space-x-8">
        <HambergerMenu size={22} color="#1B2528" />

        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={32}
          className="rounded-full"
        />
      </div>

      <div className="flex items-center space-x-8">
        <SearchNormal1 size={18} color="#1B2528" />
        <BsGrid size={18} color="#1B2528" />
        <Image
          src={profile}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
}

