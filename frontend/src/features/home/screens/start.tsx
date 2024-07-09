import TypingAnimation from "@/components/magicui/typing-animation";
import {Button} from "@/components/ui/button";
import {LayoutGridDemo} from "@/features/home/components/LayoutGripDemo";

export function Start() {
  return (
    <section className={'relative'}>
      <div className={'container flex flex-col lg:flex-row items-center gap-8'}>
        <div className={'flex flex-1 flex-col items-start gap-7'}>
          <TypingAnimation
            className="text-7xl font-bold text-black text-start dark:text-white"
            text="Share Your Experiences!"
          />
          <p>
            At Riiko, we celebrate the joy of cooking and sharing. Join our dynamic community to explore
            mouthwatering recipes, share your culinary experiences, and connect with fellow food lovers.
            Every dish tells a story, every recipe brings joy, and every meal is a chance
            to create cherished memories. Dive in and let Riiko be your kitchen companion.
          </p>
          <Button size={'lg'}>Get started</Button>
        </div>
        <div className={'flex justify-center flex-1'}>
          <LayoutGridDemo></LayoutGridDemo>
        </div>
      </div>
    </section>
  );
}