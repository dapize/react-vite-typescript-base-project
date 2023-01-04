import { FC } from 'react';
import Box from '@mui/material/Box';
import { Button as ButtonMu } from '@mui/material';
import { IButton } from './Button.d';

export const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <Box justifyContent="center" alignItems="center" display="flex">
      <ButtonMu variant="contained" onClick={onClick}>
        {children}
      </ButtonMu>
    </Box>
  );
};
