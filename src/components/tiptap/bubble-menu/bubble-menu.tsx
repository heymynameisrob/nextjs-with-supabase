import React from "react";
import { MenuFormatOptions } from "@/components/tiptap/menu/menu-format";

export const EditorMenu = ({ editor }: { editor: any }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-1 rounded-lg">
      <MenuFormatOptions editor={editor} />
    </div>
  );
};
