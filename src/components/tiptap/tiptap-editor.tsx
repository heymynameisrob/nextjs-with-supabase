'use client';
import React, { useEffect, useState } from 'react';
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor} from '@tiptap/react'
import { TipTapBubbleMenu } from '@/components/tiptap/tiptap-menu';
import { cn } from '@/utils';

export const TipTapEditor = ({onUpdate, content, ...props}: any) => {

  const [isEditable, setIsEditable] = useState(true)    

  const editor = useEditor({    
    extensions: [
      StarterKit,
      BulletList,
      Placeholder.configure({
        emptyEditorClass: 'is-editor-empty',
        placeholder: props.placeholder,
      }),
    ],
    content: content,
    editorProps: {      
      attributes: {        
        class: "focus:outline-none w-full max-w-full bg-ui-low overflow-y-auto select-auto px-3 py-2.5 prose-sm prose-p:text-sm text-primary h-[120px] overflow-y-auto dark:prose-inverted prose-strong:text-primary"
      },
    },
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());      
    }
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
      setIsEditable(true);
    }
  }, [isEditable, editor])

  return (
    <div {...props} className={cn("flex flex-col items-stretch border-[0.5px] border-outline bg-background relative rounded-lg overflow-hidden focus-within:border-primary dark:focus-within:border-white focus-within:ring-2")} role="presentation">
      {editor && <TipTapBubbleMenu editor={editor} />}
      {editor ? <EditorContent disabled={props.disabled} content={content} editor={editor} /> : <div className="h-[64px]"></div> }            
    </div>
  );
};