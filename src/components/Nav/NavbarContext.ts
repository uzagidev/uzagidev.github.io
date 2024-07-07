import { createContext, Dispatch, SetStateAction } from "react";

export interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export default NavbarContext;
