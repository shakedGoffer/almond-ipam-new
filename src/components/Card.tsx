import type React from "react";
import { cn } from '@/lib/utils/cn';

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {

  return (
    <div className={cn("p-8 bg-container-bg-transparent rounded-3xl text-sm shadow-md ", className)}>
      {children}
    </div>
  );
};


const CardTitle = ({ className, text }: { className?: string, text: string }) => {

  return (
    <h2 className={cn("text-center text-base font-semibold text-primary-text", className)}>{text}</h2>
  );
};

Card.title = CardTitle;

export default Card;