import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const BenefitCard = ({
  icon: Icon,
  title,
  description,
  className,
}: BenefitCardProps) => {
  return (
    <div
      className={cn(
        "bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/40 hover:scale-105",
        className
      )}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-primary/10 p-4 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
