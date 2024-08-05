import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export const H1 = ({ children, className }: TypographyProps) => (
  <h1
    className={cn(
      "text-5xl leading-12 font-extrabold tracking-[-0.036rem]",
      className
    )}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-[-0.0140625rem]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-[-0.009rem]", // 24px -> 1.5rem * 0.6% = 0.009rem
        className
      )}
    >
      {children}
    </h3>
  );
}

export const H4 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={cn(
        "text-xl font-semibold tracking-[-0.00625rem]", // 20px -> 1.25rem * 0.5% = 0.00625rem
        className
      )}
    >
      {children}
    </h4>
  );
}

export const P = ({ children, className }: TypographyProps) => {
  return <p className={cn("text-base leading-7 font-normal tracking-normal", className)}>{children}</p>;
}

export function Blockquote({ children, className }: TypographyProps) {
  return <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>{children}</blockquote>;
}

export function Code({ children, className }: TypographyProps) {
  return <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>{children}</code>;
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
}  

export function Large({ children, className }: TypographyProps) {
    return (
      <p className={cn("text-lg font-semibold", className)}>{children}</p>
    );
  }

  export function Small({ children, className }: TypographyProps) {
    return (
      <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
    );
  } 

  export function Muted({ children, className }: TypographyProps) {
    return (
      <p className={cn("text-muted font-normal", className)}>{children}</p>
    );
  }

  export function Disabled({ children, className }: TypographyProps) {
    return (
      <p className={cn("text-disabled font-normal", className)}>{children}</p>
    );
  }

  