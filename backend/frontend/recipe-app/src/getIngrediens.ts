import { ApiResponse } from "./api.response";

export function getIngredients(recipe: ApiResponse): string[] {
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe.meals[0][`strIngredient${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(ingredient.trim());
    }
  }

  return ingredients;
}
