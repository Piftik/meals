import * as React from "react";
import { useState } from "react";
import BasicModal from "./Modal";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import style from "./scss/navigation.module.scss";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const [isOpenSearch, setIsOpenSearch] = React.useState(false);
  const handleCloseSearch = () => {
    setIsOpenSearch(false);
  };

  return (
    <Box className={style.navigation} sx={{ width: "100%" }}>
      <BottomNavigation
        sx={{ bgcolor: "secondary.main" }}
        className={style.bottomNavigation}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BasicModal isOpen={isOpenModal} handleClose={handleCloseModal} />

        <BottomNavigationAction
          label="Add"
          onClick={() => setIsOpenModal(true)}
          icon={<AddIcon />}
        />

        <BottomNavigationAction
          label="Search"
          onClick={() => setIsOpenSearch(true)}
          icon={<SearchIcon />}
        />

        <BottomNavigationAction
          label="Login"
          href="/login"
          icon={<LoginIcon />}
        />
        <BottomNavigationAction
          label="Register"
          href="/register"
          icon={<HowToRegIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
