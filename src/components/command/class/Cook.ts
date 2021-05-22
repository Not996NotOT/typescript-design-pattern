import Food from "../abstract/Food"

export default class Cook {
    BakeChicken(food:Food){
        console.log(`厨师烤${food.name}${food.number}串`)
    }
    BakePork(food:Food){
        console.log(`厨师烤${food.name}${food.number}串`)
    }
}
