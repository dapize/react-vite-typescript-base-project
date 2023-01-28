import { ReactNode, MouseEventHandler } from 'react';

export interface IButton {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
