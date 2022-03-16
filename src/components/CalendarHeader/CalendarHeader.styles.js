import styled from '@emotion/styled';

const StyledHeader = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: 8,
  marginBottom: 36
}));

const StyledMonthTitle = styled('h1')(({ theme, isCurrentMonth }) => ({
  fontFamily: theme.fonts.primary,
  color: theme.colors.primary,
  fontSize: '24px'
}));

const StyledControls = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    border: 'none',
    background: 'transparent',
    color: theme.colors.primary,
    cursor: 'pointer'
  }
}));

export { StyledHeader, StyledMonthTitle, StyledControls };
