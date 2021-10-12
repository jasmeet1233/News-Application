import React from "react";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Filter = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Sort
        </MenuButton>
        <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Points: High to Low</MenuItem>
          <MenuItem>Comments: High to Low</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Filter;
