import { getAllMeals } from "./getAllMeals"

export async function getMealById(id: string){
    try {
        const meals = await getAllMeals();
        return meals.find(item => item.id === id);
    } catch (error) {
        throw error;
    }
}