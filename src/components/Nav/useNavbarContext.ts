import { useContext } from "react";
import NavbarContext, { NavbarContextType } from "./NavbarContext";

const useNavbarContext = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
};

export default useNavbarContext;
