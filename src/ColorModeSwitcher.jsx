// ColorModeSwitcher.jsx
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="ghost"
      {...props}
      pos={"fixed"}
      top={"4"}
      zIndex={"overlay"}
      right={"4"}
    />
  );
};

export default ColorModeSwitcher;
