import React, {useEffect, useState} from "react";
import CardMeal from "../../components/CardMeal";
import style from "../startPage/start.module.scss";
import SimpleBottomNavigation from "../../components/navigation";
import { MealDto } from "../../common/models/meal.dto";
import {useSelector, useDispatch} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { loadMeal } from "../../common/api/meal.api";


const StartPage= ()=> {

const meal: MealDto[]= useSelector((state: any) => state.mealReducer.meal)
const isLoadingNewItems = useSelector((state: any) => state.mealReducer.isLoadingNewItems);
const dispatch = useDispatch();

const [newTodoName, setNewTodoName] = useState('');

const loadItems = () => {

    dispatch({
        type: 'SET_IS_LOADING_NEW_ITEMS',
        payload: true
    })

    loadMeal()
        .then(
            (res: any) => {
                dispatch({
                    type: 'SET_MEAL',
                    payload: res.data
                })

                dispatch({
                    type: 'SET_IS_LOADING_NEW_ITEMS',
                    payload: false
                })
            });
}

useEffect(() => loadItems(), [])

const handleDelete = async (id: number) => {
  dispatch({
      type: 'DELETE_TASK_REQUEST',
      payload: id
  })
}

const handleEdit = async (id: number, editName: string) => {
  dispatch({
      type: 'EDIT_TASK',
      payload: {
          id,
          editName
      }
  })
}

  return (
    <div className={style.start__container}>
      <SimpleBottomNavigation />
      <div className={style.recipi__container}>
        {/* <CardMeal
          item={{ id: 3, name: "qqqq", ingrid: "string", cooking: "jbhkg" }}
          onDelete={() => {}}
          onEdit={() => {}}
        /> */}
        {
                    isLoadingNewItems
                        ? <CircularProgress/>
                        : meal.map((item: MealDto) => <CardMeal
                            item={item}
                            onDelete={() => handleDelete(item.id)}
                            onEdit={(editName: string) => handleEdit(item.id, editName)}
                        ></CardMeal>)
                }
      </div>
    </div>
  );
}

export default StartPage
