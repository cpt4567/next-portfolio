import { CSSObject } from '@mui/material';

export const styles: { [key in 'none' | 'sticky' | 'relative']: CSSObject } = {
  none: {
    width: '100%',
    height: '100vh',
  },
  sticky: {
    width: '100%',
    top: 0,
    position: 'sticky',
    height: '100vh',
  },
  relative: {
    position: 'relative',
    top: '-40vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
