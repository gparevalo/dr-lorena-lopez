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
    <div className="flex items-center gap-4 mb-6 ">
      <Minus className={"text-primary font-bold"} />
      <span
        className={cn(
          "text-[11px] uppercase tracking-[0.6em] font-bold",
          dark ? "text-primary" : "text-primary",
        )}
      >
        {children}
      </span>
      <Minus className={"text-primary font-bold"} />
    </div>
  );
}
 
