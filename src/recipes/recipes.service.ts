import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesService {
  async getRecipes(
    search?: string,
    ingredient?: string,
    country?: string,
    category?: string,
  ): Promise<any> {
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/search.php?s=`;
    const filterUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/filter.php?`;

    if (search) {
      url = `${process.env.NEXT_PUBLIC_BASE_URL}/search.php?s=${search}`;
    }
    if (ingredient) {
      url = `${filterUrl}i=${ingredient}`;
    } else if (country) {
      url = `${filterUrl}a=${country}`;
    } else if (category) {
      url = `${filterUrl}c=${category}`;
    }
    const response = await fetch(url);
    return await response.json();
  }

  async getRecipeById(id: string): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/lookup.php?i=${id}`;
    const response = await fetch(url);
    return await response.json();
  }
}
