import { MealDto} from "../common/models/meal.dto";

interface reducerState {
    meal: MealDto[],
    isLoadingNewItems: boolean
    
}


const initialState: reducerState = {
    meal: [],
    isLoadingNewItems: false,
   
}

export default function mealReducer(state: reducerState = initialState, action: any): reducerState {
    switch (action.type) {
        case 'SET_MEAL':
            console.log(action.payload);
            
            return {
                ...state,
                meal: action.payload,
            }
        
            
        case 'SET_IS_LOADING_NEW_ITEMS':
            return {
                ...state,
                isLoadingNewItems: action.payload,
            }
        default:
            return state
    }
}
