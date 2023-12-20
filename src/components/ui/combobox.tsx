"use client";
import React, { useState, useEffect } from "react";
import { debounce, filter } from "lodash";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils";
import { Check } from "lucide-react";

export const Combobox = ({
  onSelect,
  items,
  selectedItems,
  label,
  placeholder,
}: any) => {
  const [filteredItems, setFilteredItems] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setInputValue("");
    setFilteredItems(items);
  }, [selectedItems, items]);

  const handleOnFocus = () => {
    setIsOpen(true);
  };

  const handleOnBlur = () => {
    setIsOpen(false);
  };

  const handleOnInputChange = (e: any) => {
    setInputValue(e.target.value);
    handleFilterItems(e.target.value);
  };

  const handleFilterItems = debounce((inputValue: string) => {
    setFilteredItems(
      filter(items, (item: any) => {
        return (
          item.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.email_address.toLowerCase().includes(inputValue.toLowerCase())
        );
      }),
    );
  }, 150);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Input
          type="search"
          placeholder={placeholder}
          value={inputValue}
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
          onChange={(e) => handleOnInputChange(e)}
        />
      </PopoverTrigger>
      <PopoverContent align="center" className="w-[400px] rounded-md">
        <div className="flex flex-col">
          {filteredItems.length === 0 ? (
            <div className="grid place-items-center">
              <small className="px-4 py-2 text-secondary">No {label}</small>
            </div>
          ) : null}
          {filteredItems.length > 0 &&
            filteredItems.map((item: any) => (
              <div
                key={item.id}
                className={cn(
                  "flex items-center justify-between px-2 py-2",
                  selectedItems.includes(item.id)
                    ? "bg-ui-accent"
                    : "bg-background",
                )}
                onClick={() => onSelect(item)}
              >
                <div className="flex items-center gap-2">
                  <Avatar user={item} className="w-6 h-6" />
                  <div className="flex flex-col">
                    <small className="font-medium">
                      {item.first_name} {item.last_name}
                    </small>
                    <small className="text-secondary">{item.email}</small>
                  </div>
                </div>
                {selectedItems.includes(item.id) ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : null}
              </div>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
