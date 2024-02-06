import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

export const EmojiList = forwardRef((props: any, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ name: item.name });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length,
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(
    ref,
    () => {
      return {
        onKeyDown: (x: any) => {
          if (x.event.key === "ArrowUp") {
            upHandler();
            return true;
          }

          if (x.event.key === "ArrowDown") {
            downHandler();
            return true;
          }

          if (x.event.key === "Enter") {
            enterHandler();
            return true;
          }

          return false;
        },
      };
    },
    [upHandler, downHandler, enterHandler],
  );

  return (
    <div className="relative overflow-hidden z-50 w-32 rounded-xl border-[0.5px] border-primary-high bg-background to-transparent p-1 text-primary shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 [box-shadow: inset_0_0_0_1px_var(--colors-background),_0_12px_20px_rgba(0,0,0,0.1)]">
      {props.items.map((item: any, index: number) => (
        <div
          className={`flex flex-row items-center gap-1 w-full bg-background rounded px-1 py-2 hover:bg-ui-low focus:bg-ui-low ${
            index === selectedIndex ? "bg-ui-mid" : ""
          }`}
          key={index}
          onClick={() => selectItem(index)}
        >
          <small className="text-xs">{item.emoji}</small>
          <small className="text-xs text-primary">:{item.name}:</small>
        </div>
      ))}
    </div>
  );
});

EmojiList.displayName = "EmojiList";
