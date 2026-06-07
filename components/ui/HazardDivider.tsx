type HazardDividerProps = {
  className?: string;
};

/** A thin animated caution-tape divider — the brand's signature HSE motif. */
export function HazardDivider({ className = "" }: HazardDividerProps) {
  return (
    <div
      aria-hidden
      role="presentation"
      className={`hazard-stripe hazard-stripe-animated h-2.5 w-full ${className}`}
    />
  );
}
