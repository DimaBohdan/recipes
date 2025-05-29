import React from 'react';
import Link from 'next/link';
import { IngredientTag } from './IngredientTag';
import { getIngredients } from '@/getIngrediens';
// import Image from 'next/image';

interface RecipeDetailProps {
  recipe: {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strIngredients: string;
    strMealThumb: string;
  };
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const ingredients = getIngredients(recipe);
  return (
  <div className="flex gap-8">
    <div className="flex-1">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{recipe.strMeal}</h1>
      <Link href={`/recipes/country/${recipe.strArea}`} className="text-blue-500">
        {recipe.strArea}
      </Link>
      <p className="mt-4 whitespace-pre-line">{recipe.strInstructions}</p>
      <div className="mt-4">
        <h4 className="font-semibold">Ingredients:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {ingredients.map((ing, idx) => (
            <IngredientTag key={idx} ingredient={ing} />
          ))}
        </div>
      </div>
    </div>
  </div>
)
};
