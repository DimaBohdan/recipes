// app/recipes/page.tsx
import { RecipeList } from '@/components/RecipeList';
import { apiService } from '@/services/api.service';

interface Props {
  searchParams: {
    ingredient?: string;
    country?: string;
    category?: string;
  };
}

export default async function RecipesPage({ searchParams }: Props) {
  const ingredient = searchParams.ingredient ?? '';
  const country = searchParams.country ?? '';
  const category = searchParams.category ?? '';

  const filter =
    ingredient
      ? { type: 'ingredient', value: ingredient }
      : country
      ? { type: 'country', value: country }
      : category
      ? { type: 'category', value: category }
      : null;

  const recipes = await apiService.getRecipes({ ingredient, country, category });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {filter ? `Recipes filtered by ${filter.type}: ${filter.value}` : 'All Recipes'}
      </h1>
      <RecipeList recipes={recipes.meals} />
    </div>
  );
}
