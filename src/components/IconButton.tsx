import React from "react";
import clsx from "clsx";

const IconButton = (props: React.ComponentProps<"button">) => {
  const { children, className, ...buttonProps } = props;
  return (
    <button
      className={clsx("group uppercase before:mr-2", className)}
      {...buttonProps}
    >
      <span className="decoration-1 underline-offset-4 group-hover:underline">
        {props.children}
      </span>
    </button>
  );
};

export default IconButton;
