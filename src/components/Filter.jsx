import React,{useState} from "react";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../Globalstate/context";

const Filter = () => {
  const [condition, setCondition] = useState('Relevance')
  const {news, sortData, sort} = useGlobalContext()
    const filterHandler = (sortCondition) => {
      const updated_arr = news.sort((a, b) => b[sortCondition] - a[sortCondition]);
      sortCondition === "num_comments"
        ? setCondition("Popularity")
        : setCondition("Relevance");
      sortData(updated_arr, sortCondition)
    }

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <span>Sort By: {condition}</span>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => filterHandler("points")}>
            Relevance
          </MenuItem>
          <MenuItem onClick={() => filterHandler("num_comments")}>
            Popularity
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Filter;
