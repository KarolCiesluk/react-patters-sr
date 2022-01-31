import { NavLink } from "react-router-dom";
import { MdTravelExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "../styles/NavItem.css";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

interface MobileNavItemProps {
  icon: React.ReactNode;
}

export const MobileNavItem = ({ icon }: MobileNavItemProps) => {
  return (
    <span>
      {icon}
    </span>
  );
};

interface DesktopNavItemProps extends MobileNavItemProps {
  label: string;
}

export const DesktopNavItem = ({ icon, label }: DesktopNavItemProps) => {
  return (
    <span>
      {icon} {label}
    </span>
  );
};

interface NavItemProps {
  to: string;
  variant?: "desktop" | "mobile";
  label: string;
}

const NavItem = ({ to, variant = "desktop", label }: NavItemProps) => {
  const { state: { isLogged } } = useContext(LoginContext);

  const getIcon = () => {
    switch (label) {
      case "Content":
        return <AiOutlineUnlock />;
      case "Movies":
        return <BiMoviePlay />;
      case "Places":
        return <MdTravelExplore />;
      default:
        return <BsDot />;
    }
  };

  const checkVariant = () => {
    if (variant === "desktop") {
      return <DesktopNavItem label={label} icon={getIcon()} />;
    }

    if (variant === "mobile") {
      return <MobileNavItem icon={getIcon()} />;
    }

    throw new Error("Incorrect variant");
  };

  const setClassName = ({ isActive }: { isActive: boolean }) => {
    return `navItem ${isActive && "navItem-active"} ${!isLogged && "navItem-disabled"}`;
  };

  return (
    <NavLink className={setClassName} to={to}>
      {checkVariant()}
    </NavLink>
  );
};

export default NavItem;