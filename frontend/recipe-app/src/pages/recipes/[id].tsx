import { GetServerSideProps } from 'next';
import { RecipeDetail } from '@/components/RecipeDetail';
import { RecipeSidebar } from '@/components/RecipeSidebar';
import { apiService } from '@/services/api.service';
import { Recipe } from '@/recipe.interface';

const RecipeInfoPage = ({ recipe, sidebarRecipes }: {
    recipe: Recipe;
    sidebarRecipes: Recipe[];
  }) => (
  <div className="p-6 flex gap-8">
    <div className="flex-1">
      <RecipeDetail recipe={recipe} />
    </div>
    <div className="w-1/4">
      <RecipeSidebar recipes={sidebarRecipes} category={recipe.strCategory} />
    </div>
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
const id = Array.isArray(context.params?.id) ? context.params.id[0] : context.params?.id;

  if (!id || typeof id !== 'string') {
    return {
      notFound: true,
    };
  }

  const recipe = await apiService.getRecipeById(id);
  const sidebar = await apiService.getRecipes({ category: recipe.category });
  const sidebarRecipes = sidebar.meals.filter((r: Recipe) => r.idMeal !== recipe.idMeal);
  return { props: { recipe, sidebarRecipes } };
};

export default RecipeInfoPage;