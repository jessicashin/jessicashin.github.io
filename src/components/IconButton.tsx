import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { Link, LinkProps } from "react-router-dom";

const ButtonText = (props: PropsWithChildren) => (
  <span className="decoration-1 underline-offset-4 group-hover:underline">
    {props.children}
  </span>
);

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>((props, ref) => {
  const { children, className, ...buttonProps } = props;
  return (
    <button
      ref={ref}
      className={clsx("group uppercase", className)}
      {...buttonProps}
    >
      <ButtonText>{children}</ButtonText>
    </button>
  );
});

export function IconLink(props: LinkProps) {
  const { children, className, ...linkProps } = props;
  return (
    <Link className={clsx("group uppercase", className)} {...linkProps}>
      <ButtonText>{children}</ButtonText>
    </Link>
  );
}

export function Hyperlink(props: React.ComponentProps<"a">) {
  const { children, className, ...linkProps } = props;
  return (
    <a
      className={clsx(
        "group after:ml-1 after:align-text-bottom after:text-sm after:content-['↗']",
        className
      )}
      target="_blank"
      {...linkProps}
    >
      <ButtonText>{children}</ButtonText>
    </a>
  );
}
