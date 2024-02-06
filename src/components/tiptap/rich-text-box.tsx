"use client";
import React, { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import Placeholder from "@tiptap/extension-placeholder";
import { cn } from "@/utils";
import { Markdown } from "tiptap-markdown";

export const RichTextBox = ({
  onUpdate,
  content,
  placeholder,
  ...props
}: {
  onUpdate: (content: string) => void;
  content: string;
  placeholder?: string;
}) => {
  const [isEditable, setIsEditable] = useState(true);

  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit,
      BulletList,
      Markdown,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "focus:outline-none w-full max-w-full bg-surface-low overflow-y-auto select-auto px-3 py-2.5 prose-sm prose-p:text-sm text-primary h-[120px] overflow-y-auto dark:prose-inverted prose-strong:text-primary",
      },
    },
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
      setIsEditable(true);
    }
  }, [isEditable, editor]);

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-stretch border border-secondary bg-background relative rounded-lg overflow-y-scroll focus-within:bg-ui h-[120px]",
      )}
      role="presentation"
    >
      {editor ? (
        <EditorContent disabled={!editor} content={content} editor={editor} />
      ) : (
        <div className="h-[64px]"></div>
      )}
    </div>
  );
};
