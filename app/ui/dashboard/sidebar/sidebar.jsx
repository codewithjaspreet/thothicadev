import React from "react";
import Link from "next/link";
import Image from "next/image";

const itemList = [
  {
    itemName: "Dashboard",
    redirectUrl: "/dashboard",
    icon: "/static/icons/flash-circle.svg",
  },
  {
    itemName: "Persona",
    redirectUrl: "/persona",
    icon: "/static/icons/flash-circle.svg",
  },
  {
    itemName: "Chat",
    redirectUrl: "/chat",
    icon: "/static/icons/message-text.svg",
  },
  {
    itemName: "Teachers",
    redirectUrl: "/teachers",
    icon: "/static/icons/teacher.svg",
  },
  {
    itemName: "Status",
    redirectUrl: "/status",
    icon: "/static/icons/flash-circle.svg",
  },
  {
    itemName: "Students",
    redirectUrl: "/students",
    icon: "/static/icons/award.svg",
  },
  {
    itemName: "My Account",
    redirectUrl: "/my-account",
    icon: "/static/icons/flash-circle.svg",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start mt-8 p-6">
      {" "}
      {/* Added fixed margin from top */}
      <div className="flex items-center ml-3">
        <Image
          src="/static/icons/Avatar.svg"
          alt="user"
          width={34}
          height={34}
          className="rounded-full"
        />
        <div className="ml-4 flex flex-col items-start">
          <h4 className="text-lg font-normal">Adnan</h4>
          <p className="text-sm text-[#A5B4CB]">Admin</p>
        </div>

        <hr className="border-t w-full border-gray-300 my-3"></hr>
      </div>
      <hr className="mt-4 border-t border-[#DFE5F1]" />
      <div className="mt-4">
        {" "}
        {/* Added fixed margin from top */}
        {itemList.map((item, index) => (
          <Link key={index} href={item.redirectUrl}>
            <div className="flex items-center space-x-2 p-3 hover: border-l-blue-500  rounded-lg mt-2">
              <Image
                src={item.icon}
                alt={item.itemName}
                width={24}
                height={24}
              />
              <span className="text-sm">{item.itemName}</span>
            </div>
          </Link>
        ))}
      </div>
      {/* Create button */}
      <div className="mt-8">
        {" "}
        {/* Added fixed margin from top */}
        <button className="w-full bg-blue-500 text-white p-6 ml-3 rounded-2xl hover:bg-blue-600 hover:rounded-2xl">
          <div className="flex items-center flex-col justify-center">
            <div className=" border-white bg-white rounded-full">
              <Image
                src="/static/icons/add.svg"
                alt="Create Persona"
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm mt-2 px-6  text-white">New Teacher</span>
          </div>
        </button>
      </div>
      {/* Logout button */}
      <Link key="logout" href="/logout">
        <div className="flex items-center space-x-2 p-3 hover:bg-gray-100 rounded-lg mt-8">
          {" "}
          {/* Added fixed margin from top */}
          <Image
            src="/static/icons/login.svg"
            alt="Logout"
            width={24}
            height={24}
          />
          <span className="text-sm">Logout</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
