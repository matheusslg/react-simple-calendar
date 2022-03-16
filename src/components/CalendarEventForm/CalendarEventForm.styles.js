import styled from '@emotion/styled';

const StyledEvent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.colors.gray,
  width: '100%',
  fontSize: 11,
  padding: 12,

  input: {
    border: 'none',
    backgroundColor: theme.colors.silver,
    borderRadius: 5,
    padding: 8,
    width: '100%',
    marginBottom: 10,
  },
}));

const StyledLabels = styled('div')(() => ({
  display: 'flex',
  width: '100%',
}));

const StyledLabelColor = styled('div')(({ theme, color, selected }) => ({
  backgroundColor: theme.labels[color],
  width: 20,
  height: 20,
  borderRadius: '50%',
  cursor: 'pointer',
  opacity: 0.5,
  transition: 'transform 0.2s ease, opacity 0.2s ease',

  ...(selected && { transform: 'scale(1.1)', opacity: 1 }),

  ':not(:first-of-type):not(:last-of-type)': {
    marginLeft: 4,
    marginRight: 4,
  },

  ':first-of-type': {
    marginRight: 4,
  },

  ':last-of-type': {
    marginLeft: 4,
  },

  ':hover': {
    opacity: 1,
  },
}));

const StyledFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    color: theme.colors.primary,

    ':nth-of-type(2)': {
      color: theme.colors.danger,
    },
  },
}));

export { StyledEvent, StyledLabels, StyledLabelColor, StyledFooter };
