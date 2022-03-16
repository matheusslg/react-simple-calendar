import styled from '@emotion/styled';

const StyledDay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `inset 0 0 0 1px ${theme.colors.light}`,
  position: 'relative',
  height: 140,
  paddingTop: 60,
}));

const StyledDayNumber = styled('h3')(({ theme, isCurrentDay }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors.primary,
  fontWeight: 400,
  position: 'absolute',
  borderRadius: '50%',
  margin: 0,
  top: 12,
  right: 12,
  width: 35,
  height: 35,

  ...(isCurrentDay && {
    color: theme.colors.light,
    backgroundColor: `${theme.colors.success}`,
  }),
}));

const StyledEventsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}));

const StyledEvent = styled('div')(({ theme, selected, labelColor }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.gray,
  fontSize: 11,
  padding: 6,
  margin: 3,
  borderRadius: 6,

  ...(selected && {
    background: theme.colors.primary,
    color: theme.colors.light,
  }),

  ...(labelColor && {
    background: theme.labels[labelColor],
    ...(labelColor !== 'primary' && { color: theme.colors.gray }),
  }),

  svg: {
    marginRight: 3,
  },

  'span:first-of-type': {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    lineBreak: 'anywhere'
  },

  'span:last-of-type': {
    marginLeft: 'auto',
  },
}));

export { StyledDay, StyledDayNumber, StyledEventsWrapper, StyledEvent };
