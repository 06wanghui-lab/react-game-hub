import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInputs = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Search games..." variant="subtle" />
    </InputGroup>
  );
};

export default SearchInputs;
