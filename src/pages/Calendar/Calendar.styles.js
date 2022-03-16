import styled from '@emotion/styled';

const StyledCalendar = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: 1024,
  margin: '34px auto'
}));

export { StyledCalendar };
