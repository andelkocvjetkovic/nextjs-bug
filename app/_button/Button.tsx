"use client";
import Styles from './Button.module.scss';

import * as React from "react";

export const Button = ({ children, onClick }: React.PropsWithChildren<{ onClick: () => void }>) => {
  return <button onClick={onClick} className={Styles.button}>{children}</button>;
};

