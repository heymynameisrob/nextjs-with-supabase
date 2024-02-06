"use client";
import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import type { Editor as EditorType } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import { defaultExtensions } from "@/components/tiptap/extensions";
import { defaultEditorProps } from "@/components/tiptap/tiptap-props";
import { TipTapBubbleMenu } from "@/components/tiptap/tiptap-menu";
import { MotionDiv } from "@/components/motion-div";

export const TipTapEditor = ({
  content,
  enableLocalStorage,
}: {
  content: string;
  enableLocalStorage?: boolean;
}) => {
  /**
   * Setup the editor with the default extensions and editor props.
   */

  const editor = useEditor({
    extensions: [...defaultExtensions],
    editorProps: {
      ...defaultEditorProps,
    },
    onUpdate: ({ editor }) => {
      // Handle saving the editor
      handleSaveContent(editor);
    },
    onBlur: () => {
      stop();
    },
  });

  const handleSaveContent = useDebouncedCallback(async (editor: EditorType) => {
    if (!enableLocalStorage) return;

    const content = editor.getHTML();
    localStorage.setItem("doc", JSON.stringify({ content }));

    // Add a call to the API/DB to save the content
  }, 1000);

  /**
   * Hydrate the editor with the document content.
   * Setup editor and make editable
   */

  useEffect(() => {
    if (!editor) return;

    const localDoc = localStorage.getItem("doc");
    if (localDoc) {
      const { content } = JSON.parse(localDoc);
      editor.commands.setContent(content);
    }

    // Alternatively, pass content in from props (e.g server-side rendered content)
    // if(content) {
    //   editor.commands.setContent(content);
    // }

    editor.setEditable(true);
    editor.commands.focus();
  }, [editor, content]);

  return (
    editor && (
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="h-full overflow-y-scroll"
      >
        <TipTapBubbleMenu editor={editor} />
        <EditorContent editor={editor} />
      </MotionDiv>
    )
  );
};
