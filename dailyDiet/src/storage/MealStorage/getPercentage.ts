import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";

export async function getPercentage(){
    try {
        const meals = await getAllMeals();
        const filteredIsDiet = meals.filter(meal=> meal.isDiet === true).length;
        const percentage = parseFloat(((100 / meals.length) * filteredIsDiet).toFixed(2));
        if(percentage > 49 || meals.length === 0) {
            return { isDiet: true , percentage: percentage};
        }else{
            return { isDiet: false , percentage: percentage};
        }
        
    } catch (error) {
        throw error;
    }
}