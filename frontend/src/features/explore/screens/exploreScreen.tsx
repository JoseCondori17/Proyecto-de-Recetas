import {getRecipes} from "@/features/explore/service/api";
import {FilteredRecipes} from "@/features/explore/components/FilteredRecipes";

export async function ExploreScreen(){
  const data = await getRecipes();

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-2 gap-4">
      <FilteredRecipes recipes={data}/>
    </div>
  );
}