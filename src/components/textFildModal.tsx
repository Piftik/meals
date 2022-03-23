import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="multiline-name"
          label="Name"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          defaultValue="Name"
        />
        <TextField
          id="outlined-tags"
          label="Tags"
          placeholder="Tags"
          multiline
        />
        <TextField
          id="outlined-ingrid"
          label="Ingridienrs"
          multiline
          rows={4}
          placeholder="Ingridients"
        />
        <TextField
          id="outlined-recipi"
          label="Recipe"
          multiline
          rows={4}
          placeholder="recipe"
        />
      </div>
      <Button variant="contained">Add</Button>
    </Box>
  );
}
