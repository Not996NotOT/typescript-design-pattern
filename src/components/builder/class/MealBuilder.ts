import Meal from "./Meal";
import DrinkA from "./DrinkA";
import BurgerA from "./BurgerA";
import DrinkB from "./DrinkB";
import BurgerB from "./BurgerB";

export default class MealBuilder{
    public OrderA(){
        let meal = new Meal();
        meal.items.push(new DrinkA());
        meal.items.push(new BurgerA());
        return meal;
    }

    public OrderB(){
        let meal = new Meal();
        meal.items.push(new DrinkB());
        meal.items.push(new BurgerB());
        return meal;
    }
}