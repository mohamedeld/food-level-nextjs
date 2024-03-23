import Link from 'next/link'
import React, { Suspense } from 'react'
import classes from "./page.module.css";
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meal';
import MealLoading from './loading-out';
const Meals = async ()=>{
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}
function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
       <h1>
        Delicious meals, created <span className={classes.highlight}>by you</span>
       </h1>
       <p>Choose your favorite recipe and cook it yourself. It is easy and fun</p>
       <p className={classes.cta}>
        <Link href="/meals/share">Share your favorite recipe</Link>
       </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealLoading/>}>
          <Meals/>
        </Suspense>
      </main>

    </>
  )
}

export default MealsPage