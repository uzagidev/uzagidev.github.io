import React, { useState, ReactNode } from "react";
import NavbarContext from "./NavbarContext";

interface NavbarProviderProps {
  children: ReactNode;
}

const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
