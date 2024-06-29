import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import { initialContent } from "./initialContent";
import { common, createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/tokyo-night-dark.css";

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
    <EditorContent
      editor={editor}
      className="max-w-[700px] mx-auto pt-16 prose prose-violet"
    />
  );
}
