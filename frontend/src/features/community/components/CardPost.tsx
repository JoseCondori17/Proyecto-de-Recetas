import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Comment02Icon, FavouriteIcon, Share08Icon} from "hugeicons-react";
import {Separator} from "@/components/ui/separator";
import {calculateTimeAgo} from "@/lib/util/functionstls";

interface CardPostProps {
  avatar?: string
  author: string
  age?: number
  time: string
  date: string
  likes: number
  country: string
  title: string
  image?: string | null
  description: string
}

export function CardPost({avatar,
                         author,
                         age,
                         time,
                         date,
                         likes,
                         country,
                         title,
                         image,
                         description,}: CardPostProps) {

  const publication_time = calculateTimeAgo(date,time);

  return (
    <Card>
      <CardHeader className={'flex flex-row items-center gap-4 p-4 pb-0'}>
        <Avatar>
          <AvatarImage src={avatar} alt="user-profile" />
          <AvatarFallback className={'uppercase'}>{author[0]}</AvatarFallback>
        </Avatar>
        <div className={'flex flex-col justify-center text-xs'}>
          <div className={'flex items-center gap-2'}>
            <p className={'font-bold text-sm'}>{author}</p>
            <span className={'opacity-55'}>•</span>
            <span className={'opacity-70'}>{age} years</span>
          </div>
          <div className={'flex items-center gap-2'}>
            <p className={'opacity-70'}>{publication_time}</p>
            <span className={'opacity-55'}>•</span>
            <span className={'opacity-70'}>{country}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className={'flex flex-col gap-3 p-4'}>
        <CardTitle>{title}</CardTitle>
        {image && (
          <Image src={image}
                 alt={'image'}
                 width={120}
                 height={120}
                 className={'w-full rounded-xl'}
          />
        )}
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <div className={'pl-4 pr-4'}>
        <Separator></Separator>
      </div>
      <CardFooter className={'flex items-center justify-between p-2'}>
        <Button variant={'ghost'} className={'flex gap-2 w-1/3 opacity-70'}>
          <FavouriteIcon></FavouriteIcon>
          <span className={'text-sm'}>{likes}</span>
        </Button>
        <Button variant={'ghost'} className={'w-1/3 opacity-70'}>
          <Comment02Icon></Comment02Icon>
        </Button>
        <Button variant={'ghost'} className={'w-1/3 opacity-70'}>
          <Share08Icon></Share08Icon>
        </Button>
      </CardFooter>
    </Card>
  );
}