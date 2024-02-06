"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  ListIcon,
  PilcrowIcon,
  QuoteIcon,
  CodeIcon,
} from "@/components/icons";
import { Heading2, Heading3, Heading4 } from "lucide-react";
import { makeStringLabel } from "@/utils";

export const MenuNodeOptions = ({ editor }: any) => {
  const [activeNode, setActiveNode] = useState<string>("paragraph");

  useEffect(() => {
    if (!editor) return;

    if (editor.isActive("heading")) {
      const level = editor.getAttributes("heading").level;
      switch (level) {
        case 2:
          setActiveNode("heading-2");
          break;
        case 3:
          setActiveNode("heading-3");
          break;
        case 4:
          setActiveNode("heading-4");
          break;
      }
    }

    if (editor.isActive("paragraph")) {
      setActiveNode("paragraph");
    }
    if (editor.isActive("bullet_list")) {
      setActiveNode("bullet_list");
    }
    if (editor.isActive("blockquote")) {
      setActiveNode("blockquote");
    }
    if (editor.isActive("code_block")) {
      setActiveNode("code_block");
    }
  }, [editor]);

  const onSetNode = (node: string) => {
    setActiveNode(node);
    switch (node) {
      case "heading-2":
        editor.commands.setHeading({ level: 2 });
        break;
      case "heading-3":
        editor.commands.setHeading({ level: 3 });
        break;
      case "heading-4":
        editor.commands.setHeading({ level: 4 });
        break;
      case "paragraph":
        editor.commands.setParagraph();
        break;
      case "bullet_list":
        editor.commands.toggleBulletList();
        break;
      case "blockquote":
        editor.commands.setBlockquote();
        break;
      case "code_block":
        editor.commands.setCodeBlock();
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-2.5 h-9 rounded-full text-white hover:bg-white/10 cursor-pointer gap-2 data-[state=open]:bg-white/10">
        <small className="font-medium">{makeStringLabel(activeNode)}</small>
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={activeNode} onValueChange={onSetNode}>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="heading-2"
          >
            <Heading2 size={15} />
            <small>Heading 2</small>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="heading-3"
          >
            <Heading3 size={15} />
            <small>Heading 3</small>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="heading-4"
          >
            <Heading4 size={15} />
            <small>Heading 4</small>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="paragraph"
          >
            <PilcrowIcon />
            <small>Paragraph</small>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="bullet_list"
          >
            <ListIcon />
            <small>Bullet list</small>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="blockquote"
          >
            <QuoteIcon />
            <small>Blockquote</small>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="data-[state=checked]:bg-white/10 focus:bg-white/10 gap-2"
            value="code_block"
          >
            <CodeIcon />
            <small>Codeblock</small>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
