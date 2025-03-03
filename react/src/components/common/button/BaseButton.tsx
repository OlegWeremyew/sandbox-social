import { type FC, memo } from 'react';
import type { BaseButtonProps } from './type';

export const BaseButton: FC<BaseButtonProps> = memo(({ text, leftIcon, rightIcon, ...props }) => (
  <button {...props}>
    {leftIcon && leftIcon}
    {text}
    {rightIcon && rightIcon}
  </button>
));
