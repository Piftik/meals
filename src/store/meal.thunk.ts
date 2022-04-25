import {
  createAsyncThunk,
  createDraftSafeSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { loadMeals, loadSingleMealContent } from "../common/api/meal.api";
import { MealDto } from "../common/models/meal.dto";
import { RootState } from "./store";

export const getMealsThunk = createAsyncThunk("meal/getAll", async () => {
  const response = await loadMeals();
  console.log(response, "response");

  return response;
});

export const getOneMealThunk = createAsyncThunk(
  "meal/id",
  async (mealId: string) => {
    console.log(mealId, "mealId");

    const response = await loadSingleMealContent(mealId);
    console.log(response, "response api single");

    return response;
  }
);

export interface MealState {
  meals: MealDto[];
  meal: MealDto | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  meals: [],
  meal: null,
  loading: "idle",
} as MealState;

const mealsSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMealsThunk.fulfilled, (state, action) => {
        state.meals = action.payload;
      })
      .addCase(getOneMealThunk.fulfilled, (state, action) => {
        console.log(action.payload, "action");

        state.meal = action.payload;
      });
  },
});

export const mealSelector = createDraftSafeSelector(
  (state: RootState) => state?.meals,
  (res) => res.meals
);

export const mealDetailesSelector = createDraftSafeSelector(
  (state: RootState) => state?.meals,
  (res) => res.meal
);

export default mealsSlice.reducer;
