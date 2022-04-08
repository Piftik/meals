import React, { useEffect, useState } from "react";
import CardMeal from "../../components/CardMeal";
import style from "../startPage/start.module.scss";
import SimpleBottomNavigation from "../../components/navigation";
import { MealDto } from "../../common/models/meal.dto";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import { loadMeals } from "../../common/api/meal.api";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getMealsThunk, mealSelector } from "../../store/meal.thunk";

const StartPage = () => {
   const meal: MealDto[] = useAppSelector(mealSelector);
  // const isLoadingNewItems = useSelector(
  //   (state: any) => state.mealReducer.isLoadingNewItems
  // );
  const dispatch = useAppDispatch();

  const [newTodoName, setNewTodoName] = useState("");

 

  useEffect(() => {dispatch(getMealsThunk() )}, []);

  const handleDelete = async (id: number) => {
    dispatch({
      type: "DELETE_TASK_REQUEST",
      payload: id,
    });
  };

  const handleEdit = async (id: number, editName: string) => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id,
        editName,
      },
    });
  };
  console.log(meal);
  return (
    <div className={style.start__container}>
      <SimpleBottomNavigation />
      <div className={style.recipi__container}>
        {/* {isLoadingNewItems ? (
          <CircularProgress />
        ) : (
          meal?.map((item: MealDto) => (
            <CardMeal
              item={item}
              key={item.id }
              onDelete={() => handleDelete(item.id)}
              onEdit={(editName: string) => handleEdit(item.id, editName)}
            ></CardMeal>
          ))
        )} */}
        { meal?.map((item: MealDto) => (
            <CardMeal
              item={item}
              key={item.id }
              onDelete={() => handleDelete(item.id)}
              onEdit={(editName: string) => handleEdit(item.id, editName)}
            ></CardMeal>
          ))}
      </div>
    </div>
  );
};

export default StartPage;


