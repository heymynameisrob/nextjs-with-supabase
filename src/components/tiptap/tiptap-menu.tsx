import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { BubbleMenu } from "@tiptap/react";
import { Bold, Italic, List } from "lucide-react";

export const TipTapBubbleMenu = ({ editor }: any) => {
  return (
    <BubbleMenu
      className="bg-stone-950 text-primary border-[0.5px]border-white border-opacity-10 rounded-lg px-1 flex justify-between items-center shadow-mlg"
      editor={editor}
      tippyOptions={{ duration: 100 }}
    >
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("bold")}
        title="Bold"
        aria-label="Bold"
        onClick={() => editor.commands.toggleBold()}
      >
        <Bold size={12} />
      </Toggle>
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("italic")}
        title="Italic"
        aria-label="Italic"
        onClick={() => editor.commands.toggleItalic()}
      >
        <Italic size={12} />
      </Toggle>
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("italic")}
        title="Bullet List"
        aria-label="Bullet List"
        onClick={() => editor.commands.toggleBulletList()}
      >
        <List size={12} />
      </Toggle>
    </BubbleMenu>
  );
};
