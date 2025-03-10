"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { AllMovieGenres } from "./AllMovieGenres";
import { GenreDropdownTriggerButton } from "./GenreDropdownTriggerButton";
import { GenreHeader } from "./GenreHeader";

type GenreDropdownProps = {
  showLabel?: boolean;
};

export const GenreDropdown = ({ showLabel = true }: GenreDropdownProps) => {
  return (
    <DropdownMenu>
      <GenreDropdownTriggerButton showLabel={showLabel} />

      <DropdownMenuContent
        align="start"
        className="p-5 space-y-4 w-[335px] sm:w-[577px]"
      >
        <GenreHeader title="Genre" />
        <Separator className="border" />
        <DropdownMenuItem className="p-0 hover:!bg-transparent">
          <AllMovieGenres />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
