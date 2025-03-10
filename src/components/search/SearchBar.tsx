import { Search } from "lucide-react";

import { Input } from "../ui/input";
import { cn } from "@/lib";

type SearchBarProps = { isMobile?: boolean };

export const SearchBar = ({ isMobile = true }: SearchBarProps) => {
  console.log(isMobile);
  return (
    <div
      className={cn("relative text-muted-foreground", !isMobile && "w-[379px]")}
    >
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
      <Input
        type="text"
        value=""
        placeholder="Search...?"
        onChange={() => {}}
        className={cn("pl-[38px]", isMobile && "border-none shadow-none")}
      />
    </div>
  );
};
