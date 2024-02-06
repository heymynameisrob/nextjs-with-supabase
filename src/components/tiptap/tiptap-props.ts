import { cn } from "@/utils";
import { EditorProps } from "@tiptap/pm/view";

export const defaultEditorProps: EditorProps = {
  attributes: {
    class: cn(
      "focus:outline-none xl:min-h-[90dvh]",
      "prose prose-base max-w-2xl mx-auto py-16 xl:py-20",
      "prose-code:before:hidden prose-code:after:hidden",
      "prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-semibold prose-h5:font-regular prose-h6:font-regular",
    ),
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      // prevent default event listeners from firing when slash command is active
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command");
        if (slashCommand) {
          return true;
        }
      }
    },
  },
};
