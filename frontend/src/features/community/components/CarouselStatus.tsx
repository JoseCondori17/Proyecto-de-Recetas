import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";


export function CarouselStatus() {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/4 md:basis-1/4 lg:basis-1/5 xl:basis-1/4 avatar">
            <div className="p-1">
              <Card className={'ring-blue-700 ring-offset-base-100 ring ring-offset-2'}>
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