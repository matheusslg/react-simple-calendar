import styled from '@emotion/styled';

const StyledMonthWrapper = styled('div')(({ theme }) => ({
  width: '100%'
}));

const StyledMonthHeader = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(1, 1fr)',
  objectFit: 'cover',
  marginBottom: 10,
}));

const StyledMonth = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  objectFit: 'cover',
  borderTop: `2px solid ${theme.colors.silver}`,
}));

const StyledDayName = styled('span')(({ theme }) => ({
  color: theme.colors.primary,
  display: 'flex',
  justifyContent: 'flex-end',
  margin: 0
}));

export { StyledMonthWrapper, StyledMonthHeader, StyledMonth, StyledDayName };
