import React from 'react';
import Link from 'next/link';

interface IngredientTagProps {
  ingredient: string;
}

export const IngredientTag: React.FC<IngredientTagProps> = ({ ingredient }) => (
  <Link href={`/?ingredient=${ingredient}`}>
    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 cursor-pointer hover:bg-blue-200">
      {ingredient}
    </span>
  </Link>
);