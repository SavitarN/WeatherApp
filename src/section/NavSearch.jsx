import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
const NavSearch = () => {
  return (
    <div className="h-[10vh] w-full fixed  flex justify-center items-center ">
      <div className=" flex bg-black rounded-lg shadow-md overflow-hidden  ">
        <Input
          placeholder="Search City.."
          className="w-170 text-white font-bold  border-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        <Button variant="ghost" className="px-2">
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default NavSearch;
