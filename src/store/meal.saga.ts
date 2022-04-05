import {call, put, takeEvery} from 'redux-saga/effects'
import { addMeal, deleteMeal, editTask} from '../common/api/meal.api';
import { MealDto} from "../common/models/meal.dto";
import {select} from 'redux-saga/effects'




function* addTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(addMeal, action.payload);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {

    }
}

function* deleteTaskRequest(action: any) {
    try {
        yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
        yield call(deleteMeal, action.payload);
        yield put({type: 'LOAD_ITEMS_REQUEST'})
    } catch (e: any) {

    }
}

// function* editTaskRequest(action: any) {
//     try {
//         yield put({type: 'SET_IS_LOADING_NEW_ITEMS', payload: true})
//         yield call(editTask, action.payload.id, action.payload.editName);
//         yield put({type: 'LOAD_ITEMS_REQUEST'})
//     } catch (e: any) {

//     }
// }



export default function * todoSaga () {
    yield takeEvery('ADD_TASK_REQUEST', addTaskRequest)
    yield takeEvery('DELETE_TASK_REQUEST', deleteTaskRequest)
    // yield takeEvery('EDIT_TASK', editTaskRequest)
}
