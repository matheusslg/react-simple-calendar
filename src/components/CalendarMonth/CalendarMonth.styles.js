import styled from '@emotion/styled';

const StyledMonthWrapper = styled('div')(() => ({
  width: '100%',
}));

const StyledMonthHeader = styled('div')(({ isMobile }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(1, 1fr)',
  objectFit: 'cover',
  marginBottom: 10,

  ...(isMobile && { display: 'none' })
}));

const StyledMonth = styled('div')(({ theme, isMobile, darkMode }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  objectFit: 'cover',
  borderTop: `1px solid ${theme.colors.silver}`,

  ...(isMobile && { gridTemplateColumns: 'repeat(1, 1fr)' }),

  ...(darkMode && { borderTop: `1px solid ${theme.colors.gray}` })
}));

const StyledDayName = styled('span')(({ theme }) => ({
  color: theme.colors.primary,
  display: 'flex',
  justifyContent: 'flex-end',
  margin: 0,
}));

export { StyledMonthWrapper, StyledMonthHeader, StyledMonth, StyledDayName };
