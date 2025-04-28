import React from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface EmergencyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  phoneNumber?: string;
  label?: string;
  className?: string;
  variant?: "default" | "large";
}

const EmergencyButton = ({
  phoneNumber = "112",
  label = "Срочная помощь",
  className,
  variant = "default",
  ...props
}: EmergencyButtonProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className={cn(
        "inline-flex items-center justify-center gap-2 text-white font-semibold rounded-md transition-all",
        "bg-sos-emergency hover:bg-red-700 animate-pulse-slow focus:outline-none focus:ring-4 focus:ring-red-300",
        variant === "default" ? "px-4 py-2 text-base" : "px-6 py-3 text-lg",
        className
      )}
      {...props}
    >
      <Phone className="w-5 h-5" />
      {label}
    </button>
  );
};

export default EmergencyButton;
