import { RecipeDetail } from '@/components/RecipeDetail';
import { RecipeSidebar } from '@/components/RecipeSidebar';
import { Recipe } from '@/recipe.interface';
import { apiService } from '@/services/api.service';
import { notFound } from 'next/navigation';

interface RecipeInfoPageProps {
  params: { id: string };
}

export default async function RecipeInfoPage({ params }: RecipeInfoPageProps) {
  const id = params.id;

  if (!id) return notFound();

  const recipe = await apiService.getRecipeById(id);
  if (!recipe) return notFound();

  const sidebar = await apiService.getRecipes({ category: recipe.strCategory });
  const sidebarRecipes = sidebar.meals.filter((r: Recipe) => r.idMeal !== recipe.idMeal);

  return (
    <div className="p-6 flex gap-8">
      <div className="flex-1">
        <RecipeDetail recipe={recipe} />
      </div>
      <div className="w-1/4">
        <RecipeSidebar recipes={sidebarRecipes} category={recipe.strCategory} />
      </div>
    </div>
  );
}
