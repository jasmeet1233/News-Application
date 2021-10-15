import React, { useState } from "react";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../Globalstate/context";

const Filter = () => {
  const { sort, toggleSort } = useGlobalContext();

  return (
    <div style = {{paddingTop: '20px'}}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          style={{
            height: "35px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: '17px'
          }}
        >
          <span>
            Sort By: {sort === "num_comments" ? "Popularity" : "Relevance"}
          </span>
        </MenuButton>
        <MenuList
          style={{
            marginTop: "-13px",
            position: "absolute",
            left: "55px",
            borderLeft: '1px solid grey',
            borderBottom : '1px solid grey'
          }}
        >
          <MenuItem
            onClick={() => toggleSort("points")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "15.5px",
              padding: "4px",
            }}
          >
            Relevance
          </MenuItem>
          <MenuItem
            onClick={() => toggleSort("num_comments")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "15.5px",
              padding: "4px",
            }}
          >
            Popularity
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Filter;
