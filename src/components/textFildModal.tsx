import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AddMealDto } from "../common/models/add-meal.dto";
import { addMeal } from "../common/api/meal.api";
import { getMealsThunk } from "../store/meal.thunk";
import { useAppDispatch } from "../store/store";
import UploadAndDisplayImage from "./Image-add";

interface Props {
  onClose?: () => void;
}

export const MultilineTextFields = ({ onClose }: Props) => {
  const [meal, setMeal] = React.useState<AddMealDto>({
    name: "",
    teg: "",
    ingrid: "",
    cooking: "",
  });

  const dispatch = useAppDispatch();
  const onAddMeal = () => {
    console.log(meal);
    addMeal(meal).then(() => {
      console.log(meal);
      dispatch(getMealsThunk());
      if (onClose) onClose();
    });

    console.log(meal);
  };

  const getImageMeal = (file: File) => {
    console.log(file);
    console.log(file.name, "file name");
    // const buf = Buffer.from(file.toString());
    // const uint32array = new Uint32Array(buf);
    // console.log(buf, "buf");
    // console.log(uint32array, "uint32array");

    // const blob = new Blob([file]);
    // console.log(blob, "blob");

    setMeal((prevState) => {
      return {
        ...prevState,
        img: file.name,
      };
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, "event name");
    console.log(event.target, "event target");

    setMeal((prevState) => {
      return {
        ...prevState,
        [event.target.name as keyof AddMealDto]: event.target.value,
      };
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
          name="name"
        />
        <TextField
          id="outlined-tags"
          label="Tags"
          value={meal.teg}
          onChange={handleChange}
          placeholder="Tags"
          name="teg"
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
          name="cooking"
          placeholder="recipe"
        />
      </div>

      <UploadAndDisplayImage onFileAdded={getImageMeal} />

      <Button variant="contained" onClick={onAddMeal}>
        Add
      </Button>
    </Box>
  );
};
