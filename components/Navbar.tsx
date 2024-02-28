import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSide from "./Mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-start p-4">
      <MobileSide />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
