"use client";
import EmojiModal from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SmileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export const EmojiPicker = ({ onSelect, emoji }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleSelectEmoji = (emoji: any) => {
    onSelect(emoji);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
        <Button variant="secondary" className="border-0 w-12 h-12">
          {emoji.length ? (
            <span className="text-lg">{emoji}</span>
          ) : (
            <SmileIcon size={16} />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="p-0 w-[350px] bg-transparent border-0 overflow-scroll"
        onInteractOutside={() => setIsOpen(false)}
      >
        <EmojiModal
          // @ts-ignore
          theme={theme}
          onEmojiClick={handleSelectEmoji}
          width={350}
          lazyLoadEmojis={true}
          previewConfig={{
            showPreview: false,
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
