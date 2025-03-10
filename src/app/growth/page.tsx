import Container from "@/app/_components/container";
import Header from "../_components/header";
import { PostBody } from "../_components/post-body";
import { PostHeader } from "../_components/post-header";
import { getPostByTitle } from "@/lib/api";
import markdownStyles from "../_components/markdown-styles.module.css";
import { Separator } from "@/components/ui/separator";
import { Intro } from "../_components/intro";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Growth() {
  
  const post = getPostByTitle("Growth")
  const firstPh = "As a leader, one area of growth I can commit to is being more structured, outlined, and clear. Often, in my roles as a leader, I pride myself in trusting in the facility and ability of the people that work with me. I like to create an environment where my followers can be comfortbale to provide and contribute to the common goal from their diverse perspectives and area of expertise. Where this can go wrong, and sometimes does, is the lack of structure of a clear direction. When I am too trusting of my followers but they may not be as trusting of themselves, they can experience unclear instructions, expectations, and directions towards reaching a goal this may stop them from doing the best they can to help reach said goal."
  const secondPh = "As a teammate, one area of growth I can commit to is being more consistent with my efforts and communicating when I am in need of help. In the same vein as my leadership behavior, I trust in my capability to perform to the best of my ability and always try to do so. Sometimes, there can be other things that take priority or require me to manage my effort better so that I do not burn out and when I take the steps to do this, I rarely communicate to the team. I mainly do this because I feel as if I don't want to make an excuse for delivering less than my best work so I try to self-manage. Other times, I do not trust my team or leader enough to be vulnerable to express this and feel like I will be helped in a way that is conducive and productive to the team."
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
        {/* <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={content} /> */}
         {/* <PostBody content={post!.content} /> */}
        <div className="max-w-2xl mx-auto">
          <h4 className="text-2xl font-bold mb-4">How can I grow as a leader/teammate?
          </h4>
          <Separator className="my-4" />
          <h6 className="text-2xl font-bold mb-4">As a leader...
          </h6>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: firstPh }}
          />
          <br />
          <h6 className="text-2xl font-bold mb-4">As a teammate...
          </h6>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: secondPh }}
          />
          <br />
          <h4 className="text-2xl font-bold mb-4">Plan for Action...
          </h4>
          <Separator className="my-4" />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: "One immediate way to improve is to communicate more, willingly, openly, and honestly. I believe in both cases, as a leader and teammate, I can improve in these areas of growth. As a leader, I can take more time to explain and communicate the reasons for and why we are aiming towards a goal, and provide structure through more communication that outlines desired results and expectations. As a teammate, I believe I can trust and take a leap of faith to communicate more with my team, giving them a chance and the benefit of the doubt to potentially respond well and help me which will lead to the success of the team and achievement of the goal." }}
          />
          <br />
          <h4 className="text-2xl font-bold mb-4">How will this help?          </h4>
          <Separator className="my-4" />
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: "Currently in my BMI team, this improvement will help us onboard new members and increase the membership activity of the mentors and scholars. As a leader to not only the programming team, mentors, and scholars, I can communicate my throughly and clearly to the program what I require of them and what the program requires of them and how this leads to their benefit and for future students like us." }}
          />
        </div>
        <div className="flex justify-center mt-16">
              <Button variant="outline" size="lg" asChild>
                <Link href="/" >
                Home <HomeIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
      </article>
    </Container>
  </main>
  );
}