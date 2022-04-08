import { CombinedState, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { MealState } from './meal.thunk'
import mealReducer from './meal.thunk'

 const store = configureStore({
  reducer: {
    meals: mealReducer   
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = CombinedState<{
  meals: MealState;
  
}>;