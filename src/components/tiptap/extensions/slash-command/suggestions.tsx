import { ReactNode } from "react";
import {
  CheckBoxIcon,
  CodeIcon,
  Heading2Icon,
  Heading3Icon,
  InfoIcon,
  ListIcon,
  MagicWandIcon,
  MixIcon,
  QuoteIcon,
  TextIcon,
} from "@/components/icons";
import { getEmbedUrl } from "@/utils/editor";

export type CommandItemProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: ReactNode;
};

export const getSuggestionItems = ({ query }: { query: string }) => {
  return [
    {
      id: "ai-complete",
      title: "Continue writing",
      category: "AI",
      description: "Use AI to expand your thoughts",
      searchTerms: ["gpt", "ai"],
      icon: <MagicWandIcon />,
    },
    {
      id: "strapline",
      title: "Strapline",
      category: "Basic",
      description: "A subtitle for your document",
      searchTerms: ["subtitle", "strapline"],
      icon: <TextIcon />,
      command: ({ editor, range }: any) => {
        editor.chain().focus().deleteRange(range).setStrapline().run();
      },
    },
    {
      id: "heading2",
      title: "Heading 2",
      category: "Basic",
      description: "Medium section heading",
      searchTerms: ["heading", "medium", "h2", "##"],
      icon: <Heading2Icon size={15} strokeWidth={1} absoluteStrokeWidth />,
      command: ({ editor, range }: any) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run();
      },
    },
    {
      id: "heading3",
      title: "Heading 3",
      category: "Basic",
      description: "Small section heading",
      searchTerms: ["heading", "small", "h3", "###"],
      icon: <Heading3Icon size={15} />,
      command: ({ editor, range }: any) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 3 })
          .run();
      },
    },
    {
      id: "callout",
      title: "Callout",
      category: "Basic",
      description: "Make text standout",
      searchTerms: ["panel", "info"],
      icon: <InfoIcon />,
      command: ({ editor, range }: any) => {
        editor.chain().focus().deleteRange(range).setCallout().run();
      },
    },
    {
      id: "bullet-list",
      title: "Bullet List",
      category: "Basic",
      description: "Create a simple bullet list",
      searchTerms: ["unordered", "point"],
      icon: <ListIcon />,
      command: ({ editor, range }: any) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      },
    },
    {
      id: "blockquote",
      title: "Blockquote",
      category: "Basic",
      description: "Capture a quote",
      searchTerms: ["blockquote"],
      icon: <QuoteIcon />,
      command: ({ editor, range }: any) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .toggleNode("paragraph", "paragraph")
          .toggleBlockquote()
          .run(),
    },
    {
      id: "codeblock",
      title: "Codeblock",
      category: "Basic",
      description: "Create a code snippet",
      searchTerms: ["codeblock"],
      icon: <CodeIcon />,
      command: ({ editor, range }: any) =>
        editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
    },
    {
      id: "task-list",
      title: "To-do List",
      category: "Basic",
      description: "Track tasks and to-dos",
      searchTerms: ["todo", "task", "list"],
      icon: <CheckBoxIcon />,
      command: ({ editor, range }: any) =>
        editor.chain().focus().deleteRange(range).toggleTaskList().run(),
    },
    {
      id: "embed",
      title: "Embed",
      category: "Media",
      description: "Embed from Loom, Figma and more",
      searchTerms: ["embed", "video", "media", "figma", "loom", "youtube"],
      icon: <MixIcon />,
      command: ({ editor, range }: any) => {
        editor.chain().focus().deleteRange(range).run();

        const url = window.prompt("Enter the URL:");
        const embedUrl = getEmbedUrl(url);

        if (embedUrl) {
          editor.chain().focus().setIframe({ src: embedUrl }).run();
        }

        return;
      },
    },
  ].filter((item) => {
    if (typeof query === "string" && query.length > 0) {
      const search = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        (item.searchTerms &&
          item.searchTerms.some((term: string) => term.includes(search)))
      );
    }
    return true;
  });
};
