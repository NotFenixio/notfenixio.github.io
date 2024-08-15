import { ReactNode, useState } from "react";

interface SpoilerProps {
  children: ReactNode;
  className?: string;
}

export function Spoiler({ children, className, ...props }: SpoilerProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className={`${className} spoiler ${
        show ? "" : "spoiler-hidden"
      }`}
      onClick={() => setShow(!show)}
      {...props}
    >
      {children}
    </span>
  );
}
