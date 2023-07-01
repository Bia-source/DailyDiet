import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(name: string){
    try {
        const storageMeals = await getAllMeals();
        const filtered = storageMeals.filter(meal => meal.name !== name);
        const meals = JSON.stringify(filtered);
        //await AsyncStorage.removeItem(MEAL_COLLECTION);
        await AsyncStorage.setItem(MEAL_COLLECTION, meals)
    } catch (error) {
        throw error;
    }
}