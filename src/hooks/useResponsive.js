import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const xs = useMediaQuery({ maxDeviceWidth: 576 });
  const sm = useMediaQuery({ minDeviceWidth: 577, maxDeviceWidth: 768 });
  const md = useMediaQuery({ minDeviceWidth: 769, maxDeviceWidth: 960 });
  const lg = useMediaQuery({ minDeviceWidth: 961, maxDeviceWidth: 1024 });
  const xl = useMediaQuery({ minDeviceWidth: 1025 });
  const isMobile = xs || sm || md;
  const isDesktop = lg || xl;

  return { xs, sm, md, lg, xl, isMobile, isDesktop };
};

export default useResponsive;
