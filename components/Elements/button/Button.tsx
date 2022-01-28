import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  classes?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  children?: ReactNode;
}

const sizes = {
  small: styles.button_small,
  medium: styles.button_medium,
  large: styles.button_large,
};

export const Button = ({
  primary = false,
  size = "medium",
  label = "button",
  backgroundColor,
  children,
  classes,
  ...props
}: Props) => {
  const mode = primary ? styles.button_primary : styles.button_secondary;
  const content = label ? label : children;

  return (
    <button
      className={[styles.button, sizes[size], mode, classes].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {content}
    </button>
  );
};
