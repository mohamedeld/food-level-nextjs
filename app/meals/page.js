import Link from 'next/link'
import React from 'react'
import classes from "./page.module.css";
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meal';
async function MealsPage() {
  const meals = await getMeals();
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
        <MealsGrid meals={meals}/>
      </main>

    </>
  )
}

export default MealsPage