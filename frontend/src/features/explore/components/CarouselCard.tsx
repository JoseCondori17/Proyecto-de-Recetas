import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

export function CarouselCard(){
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 45 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/6 lg:basis-1/6 xl:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
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