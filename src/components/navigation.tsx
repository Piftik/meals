import * as React from "react";
import BasicModal from "./modal";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import HowToRegIcon from "@mui/icons-material/HowToReg";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BasicModal isOpen={isOpenModal} handleClose={handleCloseModal} />

        <BottomNavigationAction
          label="Add"
          onClick={()=> setIsOpenModal(true)}
          icon={<AddIcon />}
        />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Login" icon={<LoginIcon />} />
        <BottomNavigationAction label="Register" icon={<HowToRegIcon />} />
      </BottomNavigation>
    </Box>
  );
}
