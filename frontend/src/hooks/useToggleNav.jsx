import { useState } from "react";

const useToggleNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleToggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return { openNav, handleToggleNav };
};

export default useToggleNav;
