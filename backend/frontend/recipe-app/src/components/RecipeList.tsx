import React from 'react';
import { RecipeCard } from './RecipeCard';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.idMeal} idMeal={recipe.idMeal} strMeal={recipe.strMeal} strMealThumb={recipe.strMealThumb} />
    ))}
  </div>
);
