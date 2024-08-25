import Link from "next/link";
import React from "react";
import UserInfo from "../user-info/UserInfo";
import ModeToggle from "../mode-toggle/ModeToggle";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between z-10 absolute p-5">
      <Link href={"/"}>Meal Planner</Link>
      <div className="flex gap-3">
        <ModeToggle />
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
