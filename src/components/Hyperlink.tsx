import React from "react";
import clsx from "clsx";

const Hyperlink = (props: React.ComponentProps<"a">) => {
  const { children, className, ...linkProps } = props;
  return (
    <a
      className={clsx(
        "group after:ml-1 after:text-sm after:content-['↗']",
        className
      )}
      {...linkProps}
    >
      <span className="decoration-1 underline-offset-4 group-hover:underline">
        {props.children}
      </span>
    </a>
  );
};

export default Hyperlink;
