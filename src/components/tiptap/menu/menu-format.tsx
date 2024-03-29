"use client";
import React from "react";
import { Toggle } from "@/components/ui/toggle";
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  LinkIcon,
  UnderlineIcon,
} from "@/components/icons";
import { MenuColorOptions } from "@/components/tiptap/menu/menu-color";

export const MenuFormatOptions = ({ editor }: any) => {
  const onSetLink = () => {
    const isLink = editor.isActive("link");

    if (isLink) {
      editor.commands.unsetLink();
      return;
    }

    const url = window.prompt("Enter the URL of the link:");
    editor.commands.setLink({ href: url });
  };

  return (
    <div className="flex justify-center items-center">
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("bold")}
        title="Bold"
        aria-label="Bold"
        data-microtip-position="top"
        role="tooltip"
        onPressedChange={() => editor.commands.toggleBold()}
      >
        <BoldIcon />
      </Toggle>
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("italic")}
        title="Italic"
        aria-label="Italic"
        data-microtip-position="top"
        role="tooltip"
        onPressedChange={() => editor.commands.toggleItalic()}
      >
        <ItalicIcon />
      </Toggle>
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("underline")}
        title="Underline"
        aria-label="Underline"
        data-microtip-position="top"
        role="tooltip"
        onPressedChange={() => editor.commands.toggleUnderline()}
      >
        <UnderlineIcon />
      </Toggle>
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("link")}
        title="Link"
        aria-label="Link"
        data-microtip-position="top"
        role="tooltip"
        onPressedChange={onSetLink}
      >
        <LinkIcon />
      </Toggle>
      <Toggle
        variant="black"
        size="sm"
        pressed={editor.isActive("code")}
        title="Inline code"
        aria-label="Inline code"
        data-microtip-position="top"
        role="tooltip"
        onPressedChange={() => editor.commands.toggleCode()}
      >
        <CodeIcon />
      </Toggle>
      <MenuColorOptions editor={editor} />
    </div>
  );
};
