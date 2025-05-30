import React from 'react';
import Link from 'next/link';

interface SidebarRecipe {
  idMeal: string;
  strMeal: string;
}

interface RecipeSidebarProps {
  recipes: SidebarRecipe[];
  category: string;
}

export const RecipeSidebar: React.FC<RecipeSidebarProps> = ({ recipes, category }) => (
  <div className="border-l pl-4">
    <h3 className="font-bold mb-2">More in <Link href={`/?category=${category}`} className="text-blue-500">
        {category}
      </Link>
    </h3>
    <ul className="space-y-1">
      {recipes.map((recipe) => (
        <li key={recipe.idMeal}>
          <Link href={`/recipes/${recipe.idMeal}`} className="text-blue-600 hover:underline">
            {recipe.strMeal}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
