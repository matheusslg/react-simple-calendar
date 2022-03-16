import React from 'react';

/** Styles */
import { StyledTooltip } from './Tooltip.styles';

const Tooltip = ({ children, ...others }) => {
  return <StyledTooltip {...others}>{children}</StyledTooltip>;
};

export default Tooltip;
