import { axios } from './default-axios.api'
import {AddMealDto} from "../models/add-meal.dto";
import {MealDto} from "../models/meal.dto";
import {EditMealDto} from "../models/edit-meal.dto";
import {prepareAuthHeader} from "./axios.service";

export const loadMeal = async (): Promise<MealDto[]> => {
    try {
        const response = await axios.get<MealDto[]>('meal/get' , prepareAuthHeader())
        console.log(response);
        
        return response.data
    } catch (err: any) {
        console.log(err)
        return  []
    }
}

export const addMeal = async (meal: MealDto) => {
    console.log(meal);
    
    try {
                
        const updateTopic = await axios.post('meal/add', meal, prepareAuthHeader())
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const deleteTask = async (taskId: string) => {
    try {
        const updateTopic = await axios.delete(`todo/${taskId}`, prepareAuthHeader())
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const editTask = async (id: number, name: string, ingrid: string, cooking: string) => {
    try {
        const editMealDto: EditMealDto = {
            id, name, ingrid, cooking
        }
        const updateTopic = await axios.patch(`meal/edit`,editMealDto, prepareAuthHeader() )
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const searchTodo = async (searchText: string, currentPage: number) => {
    try {
        const updateTopic = await axios.get(`meal/search?searchText=${searchText}&page=${currentPage}&itemsPerPage=2`, prepareAuthHeader() )
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const getAmountPagesByCriteria = async (searchText: string, currentPage: number) => {
    try {
        const updateTopic = await axios.get(`meal/getAmountPagesByCriteria?searchText=${searchText}&page=${currentPage}&itemsPerPage=2`, prepareAuthHeader() )
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}

export const loadSingleTodo = async (todoId: string) => {
    try {
        const updateTopic = await axios.delete(`task/${todoId}`, prepareAuthHeader())
        return updateTopic.data
    } catch (err: any) {
        console.log(err)
    }
}


