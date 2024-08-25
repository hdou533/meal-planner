import Link from "next/link";
import React from "react";
import UserInfo from "../user-info/UserInfo";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between z-10 absolute p-5">
      <Link href={"/"}>Meal Planner</Link>
      <div>
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
