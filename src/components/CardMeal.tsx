import React from "react";
import style from "./CardMeal.module.scss";

const CardMeal = () => {
  console.log("great");

  return (
    <div>
      <div className={style.content}>
        <div className={style.container}>
          <div className={style.name}>Name</div>
          <div className={style.tag}>Tag</div>
          <div className={style.ingridients}>Ingrid</div>
          <div className={style.recepi}>recepi</div>
          <div className={style.comment}>comment</div>
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
