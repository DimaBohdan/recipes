import { GetServerSideProps } from 'next';
import { RecipeList } from '@/components/RecipeList';
import { apiService } from '@/services/api.service';
import { ApiResponse } from '@/api.response';

const RecipesPage = ({ recipes, filter }: {
    recipes: ApiResponse;
    filter: { type: string; value: string } | null;
  }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">
      {filter ? `Recipes filtered by ${filter.type}: ${filter.value}` : 'All Recipes'}
    </h1>
    <RecipeList recipes={recipes.meals} />
  </div>
);

function getAsString(param: string | string[] | undefined): string | undefined {
  if (Array.isArray(param)) return param[0];
  return param;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ingredient = getAsString(context.query.ingredient);
  const country = getAsString(context.query.country);
  const category = getAsString(context.query.category);

  const filter = ingredient
    ? { type: 'ingredient', value: ingredient }
    : country
    ? { type: 'country', value: country }
    : category
    ? { type: 'category', value: category }
    : null;
  const recipes = await apiService.getRecipes({ ingredient, country, category });
  return { props: { recipes, filter } };
};

export default RecipesPage;