import Link from 'next/link';
// import Image from 'next/image';

interface RecipeCardProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ idMeal, strMeal, strMealThumb }) => (
  <Link href={`/recipes/${idMeal}`}> 
    <div className="recipe-card">
      <img src={strMealThumb} alt={strMeal} />
      <h2>{strMeal}</h2>
    </div>
  </Link>
);