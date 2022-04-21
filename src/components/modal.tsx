import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { MultilineTextFields } from "./TextFildModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function BasicModal({ isOpen, handleClose }: ModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add meal recipi
          </Typography>
          <MultilineTextFields onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
