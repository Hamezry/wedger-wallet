import { IoMdArrowDropdown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import logo from "@@/public/Profile pictures.svg";
import Image from "next/image";
export default function DashboardHeader() {
  return (
    <div>
      <div className=" w-full flex justify-between items-center">
        <div className=" flex items-center gap-3">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            Wallet Ledger <IoMdArrowDropdown color="#1B2528" size={20} />
          </h2>
          <p className="flex items-center gap-1 text-[#1B2528] bg-[#eaeff0] py-0.5 px-3 rounded-full">
            {" "}
            <GoDotFill size={12} color="#087A2E" />
            Active
          </p>
        </div>

        <div className=" flex items-center gap-3">
          <button className=" bg-[#4a8b9f]  text-[#1B2528] rounded-xl text-sm py-1.5  font-medium px-4">
            Share
          </button>
          <p className="text-[#1B2528] border border-gray-200 rounded-full py-1.5 px-2">
            <HiOutlineDotsHorizontal className=" font-bold" size={20} />
          </p>
        </div>
      </div>
      <div className=" flex items-center gap-3 py-2">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={32}
          className="rounded-full"
        />
        <p className="text-[#798487] text-sm">Ava, Liam, Noah +12 others</p>
      </div>
    </div>
  );
}

