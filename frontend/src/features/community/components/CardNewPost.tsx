'use client'
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image02Icon, Link01Icon, Video02Icon } from "hugeicons-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FormText } from "@/features/community/components/FormText";

export function CardNewPost() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [text, setText] = useState(""); // add a state for the form text

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log(text);
  };

  return (
    <Card>
      <CardContent className={'flex flex-row gap-4 p-2 pl-4 pr-4 pb-4'}>
        <Avatar>
          <AvatarImage src={'https://github.com/shadcn.png'} alt="user-profile"/>
          <AvatarFallback>JC</AvatarFallback>
        </Avatar>
        <form onSubmit={handleSubmit} className={'w-full'}>
          <FormText preview={preview} value={text} onChange={(e) => setText(e.target.value)} />
        </form>
      </CardContent>
      <Separator />
      <CardFooter className={'flex justify-between mx-auto p-2 pl-4 pr-4'}>
        <div className={'flex'}>
          <Button size={'icon'} variant={'ghost'}>
            <Input id="picture"
                   type="file"
                   onChange={handleImageChange}
                   className={'hidden'}/>
            <Label htmlFor="picture">
              <Image02Icon />
            </Label>
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <Video02Icon />
          </Button>
          <Button size={'icon'} variant={'ghost'}>
            <Link01Icon />
          </Button>
        </div>
        <Button type="submit" onClick={handleSubmit}>Post</Button>
      </CardFooter>
    </Card>
  );
}