import React from 'react'
import classes from "./meals-grid.module.css";
import MealItem from './meal-item';
function MealsGrid({meals}) {
  return (
    <ul className={classes.meals}>
      {meals && meals.length > 0 ? meals.map(meal=>{
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        )
      }):<h4>There are no items</h4>}
    </ul>
  )
}

export default MealsGrid