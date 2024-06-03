import { FC } from 'react';
import { ButtonProps } from './Button.d';

export const Button: FC<ButtonProps> = ({ children, disabled = false }) => {
  return <button disabled={disabled}>{children}</button>;
};
