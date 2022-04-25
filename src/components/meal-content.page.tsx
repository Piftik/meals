import React, { useEffect, useState } from "react";
import "./scss/meal-item.component.scss";
import { editTask, loadSingleMealContent } from "../common/api/meal.api";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../store/store";
import EditIcon from "@mui/icons-material/Edit";

import {
  getOneMealThunk,
  mealDetailesSelector,
  mealSelector,
} from "../store/meal.thunk";
import { EditMealDto } from "../common/models/edit-meal.dto";
import { AddMealDto } from "../common/models/add-meal.dto";
import { TextField } from "@mui/material";

const MealContent = ({ response }: any) => {
  const { id }: any = useParams<{ id: string }>();

  const meal = useAppSelector(mealDetailesSelector);

  const [editMeal, setEditMeal] = useState({
    name: "",
    teg: "",
    ingrid: "",
    cooking: "",
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOneMealThunk(id));
  }, []);

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, "event name");
    console.log(event.target.value, "event targe valuet");

    setEditMeal((prevState) => {
      return {
        ...prevState,
        [event.target.name as keyof EditMealDto]: event.target.value,
      };
    });
    console.log(meal, "meal");
  };

  const onEditMeal = () => {
    console.log(id, "id");
    editTask({ ...editMeal, id: id }).then(() => {
      console.log(id, "id");

      dispatch(getOneMealThunk(id));
    });
  };

  const enableEditMode = () => {
    setIsEditMode(true);
  };

  const disableEditMode = () => {
    setIsEditMode(false);
    onEditMeal();
  };

  return (
    <div className="meal__content">
      {meal && (
        <div className="container">
          <div className="meal__name">
            {isEditMode ? (
              <TextField
                id="multiline-name"
                label="Name"
                placeholder={meal.name}
                multiline={false}
                value={editMeal.name}
                onChange={handleChange}
                name="name"
              />
            ) : (
              meal.name
            )}
          </div>
          <div className="meal__teg">
            {isEditMode ? (
              <TextField
                id="outlined-tags"
                label="Tags"
                value={editMeal.teg}
                onChange={handleChange}
                placeholder="Tags"
                name="teg"
                multiline={false}
              />
            ) : (
              <span>Теги : {meal.teg}</span>
            )}
          </div>
          <div className="meal__recipe">
            {isEditMode ? (
              <TextField
                id="outlined-recipi"
                label="Recipe"
                value={editMeal.cooking}
                onChange={handleChange}
                multiline={false}
                name="cooking"
                placeholder="recipe"
              />
            ) : (
              <span>Рецепт: {meal.cooking}</span>
            )}
          </div>
          <div className="meal__ingrid">
            {isEditMode ? (
              <TextField
                id="outlined-ingrid"
                label="Ingridienrs"
                multiline={false}
                value={editMeal.ingrid}
                onChange={handleChange}
                placeholder="Ingridients"
                name="ingrid"
              />
            ) : (
              <span>Ингридиенты: {meal.ingrid}</span>
            )}
          </div>
          <div className="meal__picture">
            <img alt="not found" width={"250px"} src={meal.img} />
            {meal.img}
          </div>
        </div>
      )}
      <EditIcon onClick={enableEditMode} />
      <CloseIcon onClick={disableEditMode} />
    </div>
  );
};

export default MealContent;
