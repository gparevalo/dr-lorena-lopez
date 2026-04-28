import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

export default function LuxuryLabel({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Minus className={"text-primary"} />
      <span
        className={cn(
          "text-[10px] uppercase tracking-[0.6em] font-semibold",
          dark ? "text-primary" : "text-primary",
        )}
      >
        {children}
      </span>
    </div>
  );
}
 
