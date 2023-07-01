import { IMeal } from "@utils/interface";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statics: undefined;
            newdiet: undefined;
            feedback: {
                isDiet: boolean
            };
            details: {
                mealDetail: IMeal
            };
            editMeal: {
                meal: IMeal
            };
        }
    }
}