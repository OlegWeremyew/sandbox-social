import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type BaseButtonProps<T = unknown> = {
  text: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & T;
