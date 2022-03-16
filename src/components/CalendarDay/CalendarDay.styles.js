import styled from '@emotion/styled';

const StyledDay = styled('div')(({ theme, darkMode, isFromAnotherMonth }) => ({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `inset 0 0 0 0.5px ${theme.colors.silver}`,
  position: 'relative',
  height: 100,
  paddingTop: 35,

  ...(isFromAnotherMonth && { background: theme.colors.light }),

  ...(darkMode && {
    boxShadow: `inset 0 0 0 0.5px ${theme.colors.gray}`,

    ...(isFromAnotherMonth && {
      background: theme.colors.grayLight
    })
  })
}));

const StyledDayNumber = styled('h3')(({ theme, isCurrentDay, isMobile, darkMode }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors.black,
  fontWeight: 400,
  position: 'absolute',
  borderRadius: '50%',
  margin: 0,
  top: 4,
  right: 4,
  width: 30,
  height: 30,

  ...(isCurrentDay && {
    color: theme.colors.light,
    backgroundColor: `${theme.colors.danger}`,
  }),

  ...(isMobile && { width: 65, borderRadius: 8 }),

  ...(darkMode && { 
    color: theme.colors.white,

    ...(isCurrentDay && {
      color: theme.colors.gray,
    })
  })
}));

const StyledEventsWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}));

const StyledEvent = styled('div')(({ theme, selected, labelColor, darkMode }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.black,
  fontSize: 11,
  padding: 3,
  margin: 3,
  borderRadius: 6,

  ...(selected && {
    background: theme.colors.primary,
    color: theme.colors.light,
  }),

  ...(labelColor && {
    background: theme.labels[labelColor],
    ...(labelColor && labelColor !== 'lightGreen' && { color: theme.colors.light }),
  }),

  ...(darkMode && {
    color: theme.colors.white,
    ...(labelColor && { color: theme.colors.black }),
  }),

  svg: {
    marginRight: 3,
  },

  'span:first-of-type': {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    lineBreak: 'anywhere',
  },

  'span:last-of-type': {
    marginLeft: 'auto',
  },
}));

export { StyledDay, StyledDayNumber, StyledEventsWrapper, StyledEvent };
