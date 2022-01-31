import { useEffect, useState } from "react";

import "../styles/Menu.css";

interface MenuProps {
  children: (isMobile: boolean) => React.ReactNode;
}

const useMobile = (maxWidth: number = 1024) => {
  const [isConditionFulfilled, setIsConditionFulfilled] = useState(
    window.innerWidth <= maxWidth
  );

  useEffect(() => {
    const mediaWatcher = window.matchMedia(
      `(max-width: ${maxWidth}px)`
    );

    mediaWatcher.addEventListener(
      "change",
      ({ matches }) => setIsConditionFulfilled(matches)
    );

    return () => mediaWatcher.removeEventListener(
      "change",
      ({ matches }) => setIsConditionFulfilled(matches)
    );
  }, [maxWidth]);

  return isConditionFulfilled;
};

const Menu = ({ children }: MenuProps) => {
  const isMobile = useMobile();

  return (
    <nav className="menu">
      {children(isMobile)}
    </nav>
  );
};

export default Menu;