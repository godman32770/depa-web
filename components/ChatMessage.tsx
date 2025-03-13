import { cn } from "@/lib/utils";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "p-3 my-2 rounded-lg max-w-[70%] shadow-sm transition-all",
        role === "user"
          ? "bg-orange-500 text-white ml-auto"
          : "bg-gray-200 text-gray-900 mr-auto"
      )}
    >
      {content}
    </div>
  );
}