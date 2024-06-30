import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import { initialContent } from "./initialContent";
import { common, createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import "highlight.js/styles/tokyo-night-dark.css";
import { BubbleButton } from "./BubbleButton";

const lowlight = createLowlight(common);

lowlight.register("js", js);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowLight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
  });
  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-violet"
      />
      {editor && (
        <BubbleMenu
          className="bg-white shadow-xl border border-zinc-100 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-100"
          editor={editor}
        >
            <BubbleButton>
                Text
                <RxChevronDown className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
                <RxChatBubble className="w-4 h-4" />
                Comment
            </BubbleButton>
          <div className="flex items-center">
            <BubbleButton>
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
