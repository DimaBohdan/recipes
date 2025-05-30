import Link from 'next/link';
// import Image from 'next/image';

interface RecipeCardProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ idMeal, strMeal, strMealThumb }) => (
  <Link href={`/recipes/${idMeal}`}>
    <div className="border p-4 rounded hover:shadow cursor-pointer">
      <img src={strMealThumb} alt={strMeal} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg mt-2 text-center font-semibold">{strMeal}</h2>
    </div>
  </Link>
);