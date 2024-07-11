import {RecipeInterface} from "@/interfaces/recipe";

interface RecipesResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: RecipeInterface[];
}

export async function getRecipes(): Promise<RecipeInterface[]> {
  try {
    const response = await fetch('https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Recetas/Recipes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch recipes');
    }

    const data: RecipesResponse = await response.json();
    return data.body;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed', error.message);
      throw new Error(error.message || 'Failed to fetch recipes');
    } else {
      console.error('An unknown error occurred');
      throw new Error('An unknown error occurred');
    }
  }
}

export async function getPopularRecipes(): Promise<RecipeInterface[]> {
  try {
    const response = await fetch('https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/Receta/Cocina/recetas/consulta', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch recipes');
    }

    const data: RecipesResponse = await response.json();
    return data.body;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed', error.message);
      throw new Error(error.message || 'Failed to fetch recipes');
    } else {
      console.error('An unknown error occurred');
      throw new Error('An unknown error occurred');
    }
  }
}

export async function getRecipeId(id: string): Promise<RecipeInterface> {
  try {
    const response = await fetch(`https://zsf3957lq6.execute-api.us-east-1.amazonaws.com/Recetas/Recipes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch recipes');
    }

    const data: any = await response.json();
    return data[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed', error.message);
      throw new Error(error.message || 'Failed to fetch recipes');
    } else {
      console.error('An unknown error occurred');
      throw new Error('An unknown error occurred');
    }
  }
}