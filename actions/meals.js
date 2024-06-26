'use server';

import { saveMeal } from "@/lib/meal";
import { redirect } from "next/navigation";
function isInvalidText(text){
  return !text || !text.trim() === "";
}
export async function handleForm(formData){
  const mealData= {
    title:formData.get("title"),
    summary:formData.get("summary"),
    instructions:formData.get("instructions"),
    image:formData.get("image"),
    creator:formData.get("name"),
    creator_email:formData.get("email"),
  }
  if(isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions)|| isInvalidText(meal.creator)|| isInvalidText(meal.creator_email) || !meal.creator_email.includes("@") || !meal.image || meal.image.size === 0)  {
    throw new Error("Invalid inputs");
  }
  await saveMeal(mealData);
  redirect("/meals");
}