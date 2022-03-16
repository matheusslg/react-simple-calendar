import styled from '@emotion/styled';

const StyledHeader = styled('div')(({ isMobile }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: 8,
  marginBottom: 36,

  ...(isMobile && { paddingLeft: 12, paddingRight: 12 })
}));

const StyledMonthTitle = styled('h1')(({ theme, darkMode }) => ({
  fontFamily: theme.fonts.primary,
  color: !darkMode ? theme.colors.black : theme.colors.white,
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
