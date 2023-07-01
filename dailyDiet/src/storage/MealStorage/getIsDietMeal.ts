import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";

export async function getIsDietMealStorage(){
    try {
        const meals = await getAllMeals();
        const filteredIsDiet = meals.filter(meal=> meal.isDiet === true).length;
        const filteredIsNotDiet = meals.filter(meal=> meal.isDiet === false).length;
        const filteredNumberAll = meals.length;
        return {
            isDietMeals: filteredIsDiet,
            isNotDietMeals: filteredIsNotDiet,
            numberAll: filteredNumberAll
        }
    } catch (error) {
        throw error;
    }
}