'use client'
import { Input } from '@/components/ui/input'
import { CardGeneral } from '@/components/common/card/card-general/cardGeneral'
import { CardPopular } from '@/components/common/card/card-popular/cardPopular'
import { useState, useEffect } from 'react'


export default function Fast() {
  const [randomRecipes, setRandomRecipes] = useState([])

  useEffect(() => {
    fetchRandomRecipes()
  }, [])

  const fetchRandomRecipes = async () => {
    try {
      const response = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=pizza&number=30', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '2325353ed6mshd8472e195c5caadp15a8e1jsn645fe6032a9e',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setRandomRecipes(data.recipes)
      } else {
        console.error('Error al obtener recetas aleatorias:', response.status)
      }
    } catch (error) {
      console.error('Error al obtener recetas aleatorias:', error)
    }
  }


  return (
    <main className='flex flex-col space-y-4 select-none sm:space-y-6 md:space-y-8'>
      <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>BreakFast</h1>
      <Input className='flex w-full ml-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
      <div className='flex-1'>
        <div className='flex flex-col space-y-2'>
          <span className='text-md'>All Recipes</span>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 2xl:grid-cols-8'>
            {randomRecipes.map((recipe, index) => (
              <CardGeneral key={index} recipe={recipe}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}