"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/utils";
import { ChevronDownIcon } from "@/components/icons";

const colorClasses = [
  { name: "default", color: "text-primary", background: "bg-primary" },
  { name: "gray", color: "text-secondary", background: "bg-secondary" },
  {
    name: "red",
    color: "text-red-600 dark:text-red-500",
    background: "bg-red-600 hover:bg-red-500",
  },
  {
    name: "orange",
    color: "text-orange-600 dark:text-orange-500",
    background: "bg-orange-600 hover:bg-orange-500",
  },
  {
    name: "amber",
    color: "text-amber-600 dark:text-amber-500",
    background: "bg-amber-600 hover:bg-amber-500",
  },
  {
    name: "yellow",
    color: "text-yellow-600 dark:text-yellow-500",
    background: "bg-yellow-600 hover:bg-yellow-500",
  },
  {
    name: "lime",
    color: "text-lime-600 dark:text-lime-500",
    background: "bg-lime-600 hover:bg-lime-500",
  },
  {
    name: "green",
    color: "text-green-600 dark:text-green-500",
    background: "bg-green-600 hover:bg-green-500",
  },
  {
    name: "emerald",
    color: "text-emerald-600 dark:text-emerald-500",
    background: "bg-emerald-600 hover:bg-emerald-500",
  },
  {
    name: "teal",
    color: "text-teal-600 dark:text-teal-500",
    background: "bg-teal-600 hover:bg-teal-500",
  },
  {
    name: "cyan",
    color: "text-cyan-600 dark:text-cyan-500",
    background: "bg-cyan-600 hover:bg-cyan-500",
  },
  {
    name: "sky",
    color: "text-sky-600 dark:text-sky-500",
    background: "bg-sky-600 hover:bg-sky-500",
  },
  {
    name: "blue",
    color: "text-blue-600 dark:text-blue-500",
    background: "bg-blue-600 hover:bg-blue-500",
  },
  {
    name: "indigo",
    color: "text-indigo-600 dark:text-indigo-500",
    background: "bg-indigo-600 hover:bg-indigo-500",
  },
  {
    name: "violet",
    color: "text-violet-600 dark:text-violet-500",
    background: "bg-violet-600 hover:bg-violet-500",
  },
  {
    name: "purple",
    color: "text-purple-600 dark:text-purple-500",
    background: "bg-purple-600 hover:bg-purple-500",
  },
  {
    name: "fuchsia",
    color: "text-fuchsia-600 dark:text-fuchsia-500",
    background: "bg-fuchsia-600 hover:bg-fuchsia-500",
  },
  {
    name: "pink",
    color: "text-pink-600 dark:text-pink-500",
    background: "bg-pink-600 hover:bg-pink-500",
  },
  {
    name: "rose",
    color: "text-rose-600 dark:text-rose-500",
    background: "bg-rose-600 hover:bg-rose-500",
  },
];

export const MenuColorOptions = ({ editor }: any) => {
  const [color, setColor] = useState<string>(colorClasses[0].color);

  const handleSetColor = (color: string) => {
    editor.chain().focus().setColor(color).run();
    setColor(color);
  };

  /**
   * Sets color in dropdown menu if node has color
   * Updates on editor change
   */
  useEffect(() => {
    if (editor.isActive("textStyle")) {
      const colorClass = editor.getAttributes("textStyle").color;
      setColor(colorClass || "text-white");
    }
  }, [editor]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle
          variant="black"
          size="sm"
          title="Color"
          aria-label="Color"
          data-microtip-position="top"
          role="tooltip"
          className="gap-2"
        >
          <small className="font-medium">A</small>
          <ChevronDownIcon className="text-white" />
        </Toggle>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className=" max-h-[240px] overflow-y-auto"
      >
        <DropdownMenuRadioGroup value={color} onValueChange={handleSetColor}>
          <>
            {colorClasses.map((color: any) => (
              <DropdownMenuRadioItem value={color.color} key={color.name}>
                <div className="flex justify-center items-center gap-2">
                  <div
                    className={cn(
                      "w-5 h-5 flex flex-col items-center rounded text-sm text-white",
                      color.background,
                    )}
                  >
                    A
                  </div>
                  <small className="capitalize">{color.name}</small>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
