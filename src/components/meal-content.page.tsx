import React, { useEffect, useState } from "react";
import "./meal-item.component.scss";
import { loadSingleMealContent } from "../common/api/meal.api";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CardMeal from "./CardMeal";

const MealContent = ({res}: any) => {
  let { id }: any = useParams<{ id: string }>();
  console.log(id);
console.log();

  useEffect(() => {
    loadSingleMealContent(id).then(() => {});
  }, []);

  const [isOpenContent, setIsOpenContent] = useState(true);

  const disableContentMode = () => {
    setIsOpenContent(false);
  }

  return (
    <div className="meal__content">
      todoContent
      
      <CloseIcon />
    </div>
  );
};

export default MealContent;
