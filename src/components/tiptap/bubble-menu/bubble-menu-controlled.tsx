import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import { Editor, isNodeSelection, posToDOMRect } from "@tiptap/core";
import { ReactNode, useState, useEffect } from "react";

export const TipTapControlledMenu = ({
  editor,
  children,
}: {
  editor: Editor;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const hasFocus = editor.view.hasFocus();
  const isEditable = editor.isEditable;

  useEffect(() => {
    if (!hasFocus || !isEditable) {
      setOpen(false);
    }
    setOpen(!editor.state.selection.empty);
  }, [hasFocus, isEditable, editor.state.selection]);

  ("box-shadow: ;");

  return (
    <Popup
      open={open}
      placement="top"
      className="dark bg-ui flex flex-row items-center justify-between p-0.5 rounded-full transition-all shadow-[0px_0px_0px_0.5px_rgb(0_0_0_/_0.40),_0px_1px_1px_-1px_rgb(0_0_0_/_0.12),_0px_2px_2px_-1px_rgb(0_0_0_/_0.12),_inset_0px_0.5px_0px_rgb(255_255_255_/_0.06),_inset_0px_0px_1px_0px_rgb(255_255_255_/_0.16),_inset_0px_-6px_12px_-4px_rgb(0_0_0_/_0.16)] before:pointer-events-none dark:before:bg-gradient-to-b before:from-white/[0.04] before:absolute before:inset-0 before:z-[1] before:rounded-full"
      modifiers={[
        {
          name: "offset",
          options: {
            // Add a slight vertical offset for the popper from the current selection
            offset: [0, 4],
          },
        },
        {
          name: "flip",
          enabled: true,
          options: {
            // We'll reposition (to one of the below fallback placements) whenever our Popper goes
            // outside of the editor. (This is necessary since our children aren't actually rendered
            // here, but instead with a portal, so the editor DOM node isn't a parent.)
            boundary: editor.options.element,
            fallbackPlacements: [
              "bottom",
              "top-start",
              "bottom-start",
              "top-end",
              "bottom-end",
            ],
            padding: 8,
          },
        },
      ]}
      anchor={() => {
        // The logic here is taken from the positioning implementation in Tiptap's BubbleMenuPlugin
        // https://github.com/ueberdosis/tiptap/blob/16bec4e9d0c99feded855b261edb6e0d3f0bad21/packages/extension-bubble-menu/src/bubble-menu-plugin.ts#L183-L193
        const { ranges } = editor.state.selection;
        const from = Math.min(...ranges.map((range: any) => range.$from.pos));
        const to = Math.max(...ranges.map((range: any) => range.$to.pos));

        return {
          getBoundingClientRect: () => {
            if (isNodeSelection(editor.state.selection)) {
              const node = editor.view.nodeDOM(from) as HTMLElement;

              if (node) {
                return node.getBoundingClientRect();
              }
            }

            return posToDOMRect(editor.view, from, to);
          },
        };
      }}
    >
      {children}
    </Popup>
  );
};
