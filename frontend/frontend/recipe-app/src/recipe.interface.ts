export interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strIngredients: string;
  strInstructions: string;
  strMealThumb: string;
  [key: `strIngredient${number}`]: string | undefined;
}
