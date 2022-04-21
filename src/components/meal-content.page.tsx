import React, { useEffect, useState } from "react";
import "./scss/meal-item.component.scss";
import { loadSingleMealContent } from "../common/api/meal.api";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CardMeal from "./CardMeal";
import { useAppDispatch, useAppSelector } from "../store/store";
import { MealDto } from "../common/models/meal.dto";
import {
  getOneMealThunk,
  mealDetailesSelector,
  mealSelector,
} from "../store/meal.thunk";

const MealContent = ({ response }: any) => {
  const { id }: any = useParams<{ id: string }>();

  const meal = useAppSelector(mealDetailesSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOneMealThunk(id));
  }, []);

  return (
    <div className="meal__content">
      {meal && (
        <div className="container">
          <div className="meal__name">{meal.name}</div>
          <div className="meal__teg"> Теги: {meal.teg}</div>
          <div className="meal__recipe">Рецепт: {meal.cooking}</div>
          <div className="meal__ingrid">Ингридиенты: {meal.ingrid}</div>
          <div className="meal__picture">{meal.img}</div>
        </div>
      )}
      <CloseIcon />
    </div>
  );
};

export default MealContent;
