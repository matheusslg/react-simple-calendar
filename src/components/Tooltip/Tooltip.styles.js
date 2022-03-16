import styled from '@emotion/styled';
import ReactTooltip from 'react-tooltip';

const StyledTooltip = styled(ReactTooltip)(({ theme }) => ({
  background: `${theme.colors.light} !important`,
  padding: '8px !important',
  opacity: '1 !important',
  borderRadius: '8px !important',
  width: 300,

  '&.place-right:after': {
    borderRightColor: `${theme.colors.light} !important`,
  },

  '&.place-left:after': {
    borderLeftColor: `${theme.colors.light} !important`,
  },

  '&.place-top:after': {
    borderTopColor: `${theme.colors.light} !important`,
  },

  '&.place-bottom:after': {
    borderBottomColor: `${theme.colors.light} !important`,
  },
}));

export { StyledTooltip };
