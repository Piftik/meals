import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {  AddMealDto } from "../common/models/add-meal.dto";
import { addMeal } from "../common/api/meal.api";

export default function MultilineTextFields() {
  const [meal, setMeal] = React.useState<AddMealDto>({
    name: "",
    teg: "",
    ingrid: "",
    cooking: "",
  });

  const onAddMeal= async ()=>{
    await addMeal (meal)
    console.log(meal);
    
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
    
  ) => {
    console.log(event.target.name);
    
    setMeal((prevState) => {
      
      return {...prevState,[event.target.name as keyof AddMealDto]: event.target.value};
    });
    console.log(event.target);
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
          multiline={false}
          value={meal.name}
          onChange={handleChange}
          defaultValue="Name"
          name="name"
        />
        <TextField
          id="outlined-tags"
          label="Tags"
          value={meal.teg}
          onChange={handleChange}
          placeholder="Tags"
          name='teg'
          multiline={false}
        />
        <TextField
          id="outlined-ingrid"
          label="Ingridienrs"
          multiline
          value={meal.ingrid}
          onChange={handleChange}
          placeholder="Ingridients"
          name="ingrid"
        />
        <TextField
          id="outlined-recipi"
          label="Recipe"
          value={meal.cooking}
          onChange={handleChange}
          multiline
          name='cooking'
          placeholder="recipe"
        />
      </div>
      <Button variant="contained" onClick={onAddMeal} >Add</Button>
    </Box>
  );
}
