import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';


export const FadeInComponent = (props: any) => {
  const fadeInEffect: SxProps<Theme> = {
    animation: `fade-in ${props.seconds}s`,
    "@keyframes fade-in": {
      "from": {
        opacity: 0
      },
      "to": {
        opacity: 100
      }
    }
  };
  return (
    <Box sx={fadeInEffect}>
      {props.children}
    </Box>
  );
}
