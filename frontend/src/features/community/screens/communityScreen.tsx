import {CardPost} from "@/features/community/components/CardPost";
import {CarouselStatus} from "@/features/community/components/CarouselStatus";
import {CardNewPost} from "@/features/community/components/CardNewPost";

import {CardPostTest} from "@/constants/test";
import {Input} from "@/components/ui/input";
import {Search01Icon} from "hugeicons-react";

export function CommunityScreen(){
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-2 gap-4">
      <div className={'flex items-center gap-1 border rounded-xl p-1 pl-3 pr-3'}>
        <Search01Icon size={'20'}></Search01Icon>
        <Input placeholder={'Search in RIIKO'} className={'focus-visible:ring-0 border-0 shadow-none'}/>
      </div>
      <CarouselStatus></CarouselStatus>
      <CardNewPost></CardNewPost>
      {
        CardPostTest.map((post, index) => (
          <CardPost key={index}
                    avatar={post.avatar}
                    author={post.author}
                    age={post.age}
                    time={post.time}
                    country={post.country}
                    title={post.title}
                    image={post.image}
                    description={post.description}
          ></CardPost>
        ))
      }
    </div>
  );
}