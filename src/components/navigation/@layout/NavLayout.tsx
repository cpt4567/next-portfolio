import { alpha, styled } from '@mui/material';

export const NavigationLayout = styled('div')(({ theme }) => ({
  position: 'fixed',
  borderRadius: theme.shape.borderRadius,
  zIndex: 2,
  backgroundColor: alpha(theme.palette.common.white, 0.4),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  cursor: 'grab',
  width: '200px',
}));
