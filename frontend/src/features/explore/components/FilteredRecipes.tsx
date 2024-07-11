'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { DirectionAwareHoverDemo } from "@/features/explore/components/DirectionAwareHoverDemo";
import { RecipeInterface } from "@/interfaces/recipe";
import {CarouselCard} from "@/features/explore/components/CarouselCard";
import {Button} from "@/components/ui/button";
import {Search01Icon} from "hugeicons-react";
import Link from "next/link";

interface FilteredRecipesProps {
  recipes: RecipeInterface[];
}

export function FilteredRecipes({ recipes }: FilteredRecipesProps) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.Nombre.toLowerCase().includes(searchTerm)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <>
      <div className={'flex items-center gap-0.5 w-full lg:w-1/2 rounded-xl border pl-3'}>
        <Search01Icon size={'18'} className={'opacity-70'}></Search01Icon>
        <Input
          type={'search'}
          placeholder={'Find your next experience'}
          className={'focus-visible:ring-0 border-0 text-sm shadow-none'}
          onChange={handleSearch}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'font-bold'}>Populars</span>
        <CarouselCard data={recipes}></CarouselCard>
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'font-bold'}>Recipes</span>
        <div className={'flex flex-wrap gap-2'}>
          {filteredRecipes.map((item, index) => (
            <Link href={`/view/explore/${item.Receta_id}`} key={index} className={'flex flex-1'}>
              <DirectionAwareHoverDemo
                imageUrl={item.Imagen}
                name={item.Nombre}
                preparation_time={item.Tiempo_Preparacion}
                calories={item.Calorias}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}