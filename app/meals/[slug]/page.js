import React from 'react'
import classes from "./page.module.css";
import Link from 'next/link';
import { getMeal } from '@/lib/meal';
import Image from 'next/image';
import { notFound } from 'next/navigation';
async function MealsSlugPage({params}) {
  const {slug} = params;
  
  const meal =  getMeal(slug);
  if(!meal){
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g,'<br/>');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
            <Image src={meal?.image} alt={meal?.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>
            by <Link href={`mailto:${meal?.creator_email}`}>{meal?.creator}</Link>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html:meal?.instructions
        }}>

        </p>
      </main>
    </>
  )
}

export default MealsSlugPage