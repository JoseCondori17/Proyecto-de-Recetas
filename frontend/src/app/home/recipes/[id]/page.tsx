'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {ClockIcon} from "@/components/icons/ClockIcon";
import {FireIcon} from "@/components/icons/FireIcon";
import {FavoritesIcon} from "@/components/icons/FavoritesIcon";


const fetchDetailsRecipes = async (id: string) => {
  try {
    const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2325353ed6mshd8472e195c5caadp15a8e1jsn645fe6032a9e',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error al obtener detalles de receta:', response.status);
    }
  } catch (error) {
    console.error('Error al obtener detalles de receta:', error);
  }
  return null;
};

const fetchNutritionRecipes = async (id: string) => {
  try {
    const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/nutritionWidget.json`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2325353ed6mshd8472e195c5caadp15a8e1jsn645fe6032a9e',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error al obtener detalles de receta:', response.status);
    }
  } catch (error) {
    console.error('Error al obtener detalles de receta:', error);
  }
  return null;
};

export default function DetailsRecipesSection({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);
  const [nutrition, setNutrition] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const recipeData = await fetchDetailsRecipes(params.id);
      const nutritionData = await fetchNutritionRecipes(params.id);
      setData(recipeData);
      setNutrition(nutritionData);
      setLoading(false);
    };
    getData();
  }, [params.id]);

  if (loading) {
    return <div className='flex items-center justify-center'>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading recipe data.</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='w-1/3'>
        <Image
          src={data.image}
          alt={data.title}
          unoptimized
          width={1080}
          height={1080}
          className='w-full rounded-xl select-none'
        />
      </div>
      <div className='flex flex-col items-center justify-start'>
        <span className='text-2xl font-bold'>{data.title}</span>
      </div>
      <div className='flex justify-between w-1/3'>
        <div className='flex items-center space-x-2'>
          <ClockIcon className='size-5 text-primary'></ClockIcon>
          <span className='text-xs'>{data.readyInMinutes} min</span>
        </div>
        <div className='flex items-center space-x-2'>
          <FireIcon className='size-5 text-primary'></FireIcon>
          <span className='text-xs'>{nutrition.calories} kcal</span>
        </div>
        <div className='flex items-center space-x-2'>
          <FavoritesIcon className='size-5 text-primary'></FavoritesIcon>
          <span className='text-xs'>{data.readyInMinutes}</span>
        </div>
      </div>
      <div className='flex flex-col w-1/3'>
        <span className='font-bold'>Descripcion</span>
        <span className={`text-xs text-gray-600 line-clamp-2`} dangerouslySetInnerHTML={{__html: data.summary}}/>
      </div>
      <div className='flex flex-col w-1/3'>
        <Tabs defaultValue="ingredientes" className="w-full">
          <TabsList className="flex w-full items-center justify-between gap-2 bg-inherit pl-4 pr-4">
            <TabsTrigger value="ingredientes" className='w-48 h-8 text-xs bg-gray-200'>Ingredientes</TabsTrigger>
            <TabsTrigger value="preparacion" className='w-48 h-8 text-xs bg-gray-200'>Preparación</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredientes">
            <ul className='text-xs'>
              {data.extendedIngredients.map((item: any) => (
                <li key={item.id} className='flex justify-between'>
                  <span className='capitalize'>{item.name}</span>
                  <span>{item.amount} {item.unit}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="preparacion">
            <div dangerouslySetInnerHTML={{ __html: data.instructions }} className='text-xs'/>
          </TabsContent>
        </Tabs>
        {/*<span className='font-bold'>Ingredientes</span>*/}
      </div>
    </div>
  );
}