import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="subtle"
          bg="gray.700"
          color="white"
          _hover={{ bg: "gray.600" }}
          _open={{ bg: "gray.600" }}
        >
          Order by: Relevance <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="item1">Relevance</Menu.Item>
          <Menu.Item value="item2">Date Added</Menu.Item>
          <Menu.Item value="item3">Name</Menu.Item>
          <Menu.Item value="item4">Release date</Menu.Item>
          <Menu.Item value="item5">Popularity</Menu.Item>
          <Menu.Item value="item6">Average rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
export default SortSelector;
