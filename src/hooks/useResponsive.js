import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const xs = useMediaQuery({ query: '(max-width: 576px)' });
  const sm = useMediaQuery({ query: '(min-width: 577px and max-width: 768px)' });
  const md = useMediaQuery({ query: '(min-width: 769px and max-width: 960px)' });
  const lg = useMediaQuery({ query: '(min-width: 961px and max-width: 1024px)' });
  const xl = useMediaQuery({ query: '(min-width: 1025px)' });
  const isMobile = xs || sm || md;
  const isDesktop = lg || xl;

  return { xs, sm, md, lg, xl, isMobile, isDesktop };
};

export default useResponsive;
