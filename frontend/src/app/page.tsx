'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Start} from "@/features/home/screens/start";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <nav className={'container flex items-center py-4'}>
          <Image src={'/images/logo.svg'}
                 alt={'logo-web'}
                 width={64}
                 height={64}
                 priority
                 className={'items-start'}
          />
          <ul className={'hidden sm:flex flex-1 justify-center uppercase text-xs gap-12'}>
            <li>About</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <Button variant={'outline'}>
            <Link href='/auth/login'>
              Login
            </Link>
          </Button>
        </nav>
      </header>
      <main>
        <Start></Start>
        <section>
        </section>
        <section>

        </section>
        <section>

        </section>
      </main>
      <footer>
        contact us
      </footer>
    </div>
  );
}
