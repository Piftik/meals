import React, { useState } from "react";
import style from "./scss/CardMeal.module.scss";
import { MealDto } from "../common/models/meal.dto";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "@mui/material";
import { useAppDispatch } from "../store/store";
import { deleteMeal } from "../common/api/meal.api";
import { getMealsThunk } from "../store/meal.thunk";

const CardMeal = ({
  item,
  onDelete,
  onEdit,
}: {
  item: MealDto;
  onDelete: () => void;
  onEdit: (editName: string) => void;
}) => {
  const dispatch = useAppDispatch();

  const onDeleteMeal = (mealId: number) => {
    deleteMeal(mealId.toString()).then(() => {
      dispatch(getMealsThunk());
    });
  };

  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.card}>
          <Link href={`/meal/${item.id}`}>
            <h3>{item.name}</h3>
          </Link>
        </div>
        <div className={style.icon}>
          <FavoriteBorderIcon />
          <DeleteIcon onClick={() => onDeleteMeal(item.id)} />
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
