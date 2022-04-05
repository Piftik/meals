import React, {useState} from "react";
import style from "./CardMeal.module.scss";
import { MealDto } from "../common/models/meal.dto";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "@mui/material";


const CardMeal = ({
  item,
  onDelete,
  onEdit,
}: {
  item: MealDto;
  onDelete: () => void;
  onEdit: (editName: string) => void;
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedMealName, setEditedTodoName] = useState("");

  const changeTodoName = (e: any) => {
    setEditedTodoName(e.target.value);
  };

  const enableEditMode = () => {
    setIsEditMode(true);
  };

  const disableEditMode = () => {
    setIsEditMode(false);
    onEdit(editedMealName);
  };

  return (
    <div className={style.content}>
      <div className={style.container}>
        <FavoriteBorderIcon />
        <DeleteIcon onClick={onDelete} />
        <EditIcon onClick={enableEditMode} />
        <div className="card">
          {" "}
          {isEditMode ? (
            <input value={editedMealName} onChange={changeTodoName} />
          ) : (
            <Link href={`/meal/${item.id}`}>{item.name}</Link>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMeal;
