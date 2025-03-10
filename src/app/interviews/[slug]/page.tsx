import Container from "@/app/_components/container";
import { getAllPosts, getPostBySlug, getPostByTitle } from "@/lib/api";
import { Separator } from "@/components/ui/separator";
import { Intro } from "@/app/_components/intro";
import { PostHeader } from "@/app/_components/post-header";
import markdownStyles from "../../_components/markdown-styles.module.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


type Params = {
  params: Promise<{
    slug: string;
  }>;
};

const JBM = [
  {
    question: "Can you tell me one time where I was at my best self?",
    answer: "There's a lot of times but the most recent that comes to mind is at the Oratorical Competition that you won."
  },
  {
    question: "Was it just the winning moment that made me at my best self?",
    answer: "No, it was everything before that moment. Once you won, it just felt rewarding. In your time of preparation, you were focused and confident. And when it was time to perform, you were calm in a time of stress and able to show your preparation and competitive spirit."
  },
  {
    quote: "You were calm in a time of stress and were able to show your preparation and competitive spirit.",
    thoughts: "I am not surprised with this answer because I also felt the same way. It was extremely rewarding to hear my name called up at the end of the competition. I had fallen in love with the process of writing the speech itself that I felt proud regardless of the outcome. To be honest though, when I went up to give the speech, I felt a weird calmness and when I opened my mouth, it was strong and confident and I was in the zone."
  }
]

const AD = [
  {
    question: "Can you tell me one time where I was at my best self?",
    answer: "When you were a child, before you even started schooling, you would sit in the corner of the couch and quietly watch tv, glued to it, reading the closed captions and understanding everything."
  },
  {
    question: "I was reading the closed captions?",
    answer: "Yes, you started reading very early surpisingly but it was a challenge to you and you were determined to do it because you were competing with your older brother. And he was nice enough to teach you what you didn't know."
  },
  {
    quote: "You were competitive with your older brother in studies. Because of that, you performed well and got into scholar programs and engaged in STEM activities with energy and determination.",
    thoughts: "I was a bit surprised because I don't remember much of that early childhood. However, I do remember being competitive with my older brother and him teaching me how to read and count early. I believe a common theme is this idea of competitiveness and how I use it to spur me on to motivate myself to be curious, determined, and perform well. Finding an angle of competitiveness can help me if I am able to harness that to help me in the future."
  }

]

export default async function Interview(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  const data = params.slug === "interview-jade" ? JBM : AD; 



  return (
    <main>
    <Container>
      <Intro  />
      <article className="mb-32">
      <PostHeader
          title={post!.title}
          coverImage={post!.coverImage}
          date={post!.date}
          author={post!.author}
        />
        <div className="max-w-2xl mx-auto"> 
          {/* Q&A section */}
          <div className="space-y-12">
          
            {/* Pull quote */}
            <blockquote className="border-l-4 border-black pl-6 py-2 my-8 font-serif text-2xl md:text-3xl italic">
              {data[2].quote}
            </blockquote>
            <Separator className="border-dashed" />
            {data.slice(0, 2).map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-black text-white font-serif text-xl font-bold rounded-full">
                      EA
                    </div>
                    <p className="font-serif text-xl md:text-2xl font-bold pt-2">
                      {item.question}
                    </p>
                  </div>
                  <div className="flex gap-4 pl-16">
                    <Avatar className="w-10 h-10 border border-black">
                      <AvatarImage src={post!.coverImage} alt="Interviewee" />
                      <AvatarFallback>Them</AvatarFallback>
                    </Avatar>
                    <div className="space-y-4">
                      <p className="leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                  <Separator className="border-dashed" />
                </div>
              ))}

            {/* Question 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                
                <p className="font-serif text-xl md:text-2xl font-bold pt-2">
                  Thoughts?
                </p>
              </div>
              <div className="flex gap-4 pl-16"> 
                <Avatar className="w-10 h-10 border border-black">
                  <AvatarImage src="/assets/blog/slideshow/Enoch_Appiah_copy.JPG" alt="Interviewee" />
                  <AvatarFallback>Them</AvatarFallback>
                </Avatar>
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    {data[2].thoughts}
                  </p>
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
