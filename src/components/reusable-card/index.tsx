import React from "react";

type CreditCardProps = {
  title?: string;
  value?: string;
  change?: string;
  bg?: string;
  className?: string;
  "aria-label"?: string;
  onMenuClick?: () => void;
};

export const CreditCard: React.FC<CreditCardProps> = ({
  title = "Total Credits",
  value = "$7,890",
  change = "+3%",
  bg = "bg-[#2f5a66]",
  className = "",
  "aria-label": ariaLabel = "Total credits card",
  onMenuClick,
}) => {
  const isInlineColor = /^#|^rgb/.test(bg);
  const inlineStyle = isInlineColor ? { backgroundColor: bg } : undefined;
  const bgClass = isInlineColor ? "" : bg;

  return (
    <section
      aria-label={ariaLabel}
      className={`rounded-2xl p-5 text-white w-full max-w-xs ${bgClass} ${className}`.trim()}
      style={inlineStyle}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-lg md:text-xl tracking-tight">
          {title}
        </span>
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="More options"
          className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(0,0,0,0.15)] hover:bg-[rgba(0,0,0,0.25)] focus:outline-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mx-0.5" />
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mx-0.5" />
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block mx-0.5" />
        </button>
      </div>

      <div className="text-4xl md:text-5xl font-extrabold leading-tight text-left">
        {value}
      </div>

      <div className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
        {change}
      </div>
    </section>
  );
};

export default CreditCard;

