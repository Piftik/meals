import React, { useEffect, useState } from "react";
import CardMeal from "../../components/CardMeal";
import style from "../startPage/start.module.scss";
import SimpleBottomNavigation from "../../components/navigation";
import { MealDto } from "../../common/models/meal.dto";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { getMealsThunk, mealSelector } from "../../store/meal.thunk";

const StartPage = () => {
  const meal: MealDto[] = useAppSelector(mealSelector);

  const dispatch = useAppDispatch();

  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getMealsThunk());
  }, []);

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
      <input
        className={style.input}
        placeholder="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={style.recipi__container}>
        {meal
          ?.filter((item) => {
            if (query === "") {
              return item;
            } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
          })
          .map((item: MealDto) => (
            <CardMeal
              item={item}
              key={item.id}
              onDelete={() => handleDelete(item.id)}
              onEdit={(editName: string) => handleEdit(item.id, editName)}
            ></CardMeal>
          ))}
      </div>
    </div>
  );
};

export default StartPage;
