import { Switch } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Switch.Root
      checked={colorMode === "dark"}
      colorPalette="green"
      onCheckedChange={({ checked }) =>
        setColorMode(checked ? "dark" : "light")
      }
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Dark Mode</Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
