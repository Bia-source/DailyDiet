import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { IMeal } from "@utils/interface";

export async function updateMealStorage(meal: IMeal){
    try {
        const meals = await getAllMeals();
        const getMeal = meals.filter(item => item.id !== meal.id);
        const storage = JSON.stringify([...getMeal, meal ]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        await getAllMeals();
    } catch (error) {
        throw error;
    }
}