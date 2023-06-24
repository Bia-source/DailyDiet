import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMeal } from "@utils/interface";
import { getAllMeals } from "./getAllMeals";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function newMeal(meal: IMeal) {
   console.log("new->",meal)
     try {
      const storageMeals = await getAllMeals();
        const storage = JSON.stringify([...storageMeals, meal]);
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
      
     } catch (error) {
        throw error;
     }
}