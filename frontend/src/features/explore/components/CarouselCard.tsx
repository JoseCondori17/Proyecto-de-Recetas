import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
/*import {getPopularRecipes, getRecipes} from "@/features/explore/service/api";*/
import Image from "next/image";
import {RecipeInterface} from "@/interfaces/recipe";

export function CarouselCard({data} : {data: RecipeInterface[]}){

  return (
    <Carousel>
      <CarouselContent>
        {data.map((value, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/6 lg:basis-1/6 xl:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <Image src={value.Imagen}
                         alt={'image'}
                         width="1000"
                         height="1000"
                         unoptimized
                         className={'h-full rounded-xl'}
                         priority
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}