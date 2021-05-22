import React, { Component } from 'react'
import { Button } from 'antd'
import MealBuilder from './class/MealBuilder'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleBuyMeal = () => {
        let mealBuilder: MealBuilder = new MealBuilder();
        console.log('套餐一');
        mealBuilder.OrderA().ShowItem();
        console.log('总价' + mealBuilder.OrderA().GetCost())
        console.log('套餐二');
        mealBuilder.OrderB().ShowItem();
        console.log('总价' + mealBuilder.OrderB().GetCost())
    }
    render() {
        return <>
            <div>按F12查看效果</div>
            <div>
                <Button onClick={this.handleBuyMeal}>购买KFC套餐</Button>
            </div>
        </>
    }
}
