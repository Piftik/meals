import { AddMealDto } from "../common/models/add-meal.dto";
import {
  createAsyncThunk,
  createDraftSafeSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { addMeal, loadMeals } from "../common/api/meal.api";
import { MealDto } from "../common/models/meal.dto";
import { RootState } from "./store";

export const getMealsThunk = createAsyncThunk("meal/getAll", async () => {
  const response = await loadMeals();
  console.log(response, "response");

  return response;
});

export interface MealState {
  meals: MealDto[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  meals: [],
  loading: "idle",
} as MealState;

const mealsSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMealsThunk.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const mealSelector = createDraftSafeSelector(
  (state: RootState) => state?.meals,
  (res) => res.meals
);

export default mealsSlice.reducer;
