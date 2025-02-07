import React from 'react';
import { cn } from "@/lib/utils.js";

function SectionHeader({ title, subtitle, className }) {
  return (
    <div className={cn("text-center space-y-2 mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-primary">{title}</h2>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;