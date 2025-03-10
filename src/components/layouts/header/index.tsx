"use client";

import { MovieZLogo } from "@/components/common";
import { GenreDropdown } from "@/components/genre";
import { SearchBar } from "@/components/search";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkThemeActive = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkThemeActive ? "light" : "dark");

  console.log(resolvedTheme);

  return (
    <header className="fixed top-0 inset-x-0 z-20 h-[59px] bg-background flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
        <MovieZLogo className="text-indigo-700" />

        <div className="relative hidden lg:flex items-center gap-x-3">
          <GenreDropdown />
          <SearchBar isMobile={false} />
        </div>
        <div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDarkThemeActive ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </header>
  );
};
