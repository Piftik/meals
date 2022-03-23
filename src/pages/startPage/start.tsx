import React from "react";
import CardMeal from "../../components/CardMeal";
import style from "../startPage/start.module.scss";
import SimpleBottomNavigation from "../../components/navigation";

function StartPage() {
  return (
    <div className={style.start__container}>
      <SimpleBottomNavigation />
      <div className={style.recipi__container}>
        <CardMeal />
        <CardMeal />
        <CardMeal />
      </div>
    </div>
  );
}

export default StartPage;
