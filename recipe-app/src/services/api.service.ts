export const apiService = {
  async getRecipes(filter?: { ingredient?: string; country?: string; category?: string }) {
    const params = new URLSearchParams();

    if (filter?.ingredient) params.set('ingredient', filter.ingredient);
    if (filter?.country) params.set('country', filter.country);
    if (filter?.category) params.set('category', filter.category);

    const res = await fetch(`${process.env.BACKEND_URL}/recipes?${params.toString()}`);
    console.log(`${process.env.BACKEND_URL}/recipes?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch recipes');
    return res.json();
  },

  async getRecipeById(id: string) {
    const res = await fetch(`${process.env.BACKEND_URL}/recipes/${id}`);
    if (!res.ok) throw new Error('Failed to fetch recipe details');
    return res.json();
  }
};
