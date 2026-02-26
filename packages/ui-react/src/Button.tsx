import React from "react";
import "@acme/ui-tokens/src/tokens.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", style, ...rest }: Props) {
  const base: React.CSSProperties = {
    borderRadius: "var(--radius-md)",
    padding: "var(--space-sm) var(--space-md)",
    border: "1px solid color-mix(in oklab, var(--color-primary), transparent 50%)",
    cursor: "pointer"
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "var(--color-primary)", color: "#081024" },
    ghost: { background: "transparent", color: "var(--color-fg)" }
  };

  return <button style={{ ...base, ...variants[variant], ...style }} {...rest} />;
}