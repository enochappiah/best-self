"use client";
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Slideshow from "@/app/_components/Slideshow"; 

const images1 = [
  "/assets/blog/slideshow/18bb8a30-b6b3-46f2-9734-64e518cbfe85_Original.jpg",
  "/assets/blog/slideshow/b12db4eb-fba5-4e99-917a-824847d4a1c3_Original.jpg",
  "/assets/blog/slideshow/ec239390-9a86-4984-97c8-9d9d38d38603_Original.jpg",
  "/assets/blog/slideshow/IMG-20170930-WA0006_Original_Original.jpg",
];
const images2 = [
  "/assets/blog/slideshow/IMG_5957.JPG",
  "/assets/blog/slideshow/IMG_4541.JPG", 
  "/assets/blog/slideshow/IMG_1200.JPG"
];
const images3 = [
  "/assets/blog/slideshow/Enoch_Appiah_copy.JPG",
  "/assets/blog/slideshow/IMG_9455.JPG", 
  "/assets/blog/slideshow/IMG_5167.JPG"
];
export default function Index() {
  return (
    <main>
      <Container>
        <Intro />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Enoch Appiah</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get to know more about my journey, skills, and what drives me.
                </p>
              </div>
            </div>

            {/* First row - Slideshow on left, text on right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <Slideshow images={images1}/> 
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">My Story</h3>
                <p className="text-muted-foreground">
                  I am a First-Gen Ghanaian American from New York City currently in my senior year at Johns Hopkins University, majoring in Computer Science.
                   Currently, I work as a developer on the Quest2Learn team. 
                </p>

                <p className="text-muted-foreground">
                My journey has been shaped by a love for learning, passion for technology, and a commitment to making a positive impact.
                </p>
                
                <div className="pt-4">
                  <Button asChild>
                    <Link href="#second-row">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Second row - Text on left, image on right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16" id="second-row">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl font-bold">Beyond Class</h3>
                <p className="text-muted-foreground">
                Outside of class, I am a Programming Lead and Head Mentor of the Black Male Initiative and a member of the Knotty By Nature E-board. I play soccer and 
                enjoy watching basketball and watching shows, movies, and anime. I played percussion instruments, namely the drums since elementary school.
                </p>
                
                <div className="pt-4">
                  <Button asChild>
                    <Link href="#third-row">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-square overflow-hidden rounded-xl order-1 md:order-2">
                <Slideshow images={images2}/>
              </div>
            </div>

            {/* Third row - Image on left, text on right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="third-row">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Slideshow images={images3}/>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Purpose</h3>
                <p className="text-muted-foreground">
                  This website serves to educate you about who I am in a portfolio for Leadership Theory. In this class, we learn about
                  what Leadership is, the different ways it has evolved, as a theory, and how it is practiced. Specifically, we learn about the evolution of leadership, from self-centered and innate
                  to a more holistic view, encompassing the traits a leader possesses and the followers they lead. 
                </p>
                <p className="text-muted-foreground">
                Come along on my journey to discover my best self!
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/interviews">
                      Let's Go! <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            
            <div className="flex justify-center mt-16">
              <Button size="lg" asChild>
                <Link href="/interviews">
                Next Page <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
            </div>
            
            
          </div>
        </section>
      </Container>   
    </main>
  );
}
