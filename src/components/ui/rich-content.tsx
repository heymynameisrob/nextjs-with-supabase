"use client";
import React, { useEffect, useMemo, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import { useEditor, EditorContent } from "@tiptap/react";
import { Skeleton } from "@/components/ui/skeleton";

export const RichContent = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const renderSkeleton = useMemo(
    () => (
      <div className="flex flex-col space-y-2 mt-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    ),
    [],
  );

  const editor = useEditor({
    extensions: [StarterKit, BulletList, ListItem],
    content: content,
    editable: false,
    editorProps: {
      attributes: {
        class: "prose prose-primary prose-p:text-[13px] dark:prose-invert",
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor?.commands.setContent(content);
      setIsLoading(false);
    }
  }, [content, editor]);

  return isLoading ? (
    renderSkeleton
  ) : (
    <EditorContent
      editor={editor}
      contentEditable={false}
      className={className}
    />
  );
};
