import Container from "@/app/_components/container";
import Header from "../_components/header";
import { PostHeader } from "../_components/post-header";
import { getPostByTitle } from "@/lib/api";
import markdownStyles from "../_components/markdown-styles.module.css";
import { Separator } from "@/components/ui/separator";
import { Intro } from "../_components/intro";
import { Button } from "@/components/ui/button";
import {ArrowRight, Share } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Reflection() {


  
  const post = getPostByTitle("Reflection")
  const firstPh = "As a leader, one area of growth I can commit to is being more structured, outlined, and clear. Often, in my roles as a leader, I pride myself in trusting in the facility and ability of the people that work with me. I like to create an environment where my followers can be comfortable to provide and contribute to the common goal from their diverse perspectives and area of expertise. Where this can go wrong, and sometimes does, is the lack of structure of a clear direction. When I am too trusting of my followers but they may not be as trusting of themselves, they can experience unclear instructions, expectations, and directions towards reaching a goal this may stop them from doing the best they can to help reach said goal."
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
        <div className="max-w-2xl mx-auto">
          <h4 className="text-2xl font-bold mb-4">The Blake Mouton Grid 
          </h4>
          <Separator className="my-4" />
          <h6 className="text-xl font-bold mb-4">What is the Blake Mouton Grid?
          </h6>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: "The Blake Mouton Grid is a managerial grid theory that takes a behavioral approach to leadership styles, created by Robert R. Blake and Jane Mouton in 1964. The grid proposes 5 different leadership styles based on where one places on the spectrum of two axes, concern for people and concern for results. " }}
          />
          <br />
          {/* <h6 className="text-2xl font-bold mb-4">As a teammate...
          </h6> */}
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: "The `concern for people` dimension captures one's person-centeredness or their concern for their followers as a leader. On the lower end of the spectrum sits autocratic leaders who only focus on tasks and not much on the people and their morale and motivation. The other, higher end of the spectrum are servant leaders who tend to be too interested in the needs, demands, and self-interests of their indvidual followers" }}
          />
          <br />
        
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: "The `concern for tasks` dimensions captures the degree to which one places on achieving objectives, high productivity, and organizational efficiency when deciding how to accomplish a task. If a leader is on the high end of this axe, they are too concerned about productivity and efficiency. On the other end, they are not interested in the results much." }}
          />
          <br />
          <Image
            src={"/assets/blog/reflection/grid.png"}
            alt={`Blake Mouton Grid`}
            width={400}
            height={400}
          
          />
          <blockquote className="border-l-4 border-black pl-6 py-2 my-8 font-serif text-2xl md:text-3xl ">
              {"Depending on how a leader balances and displays their concern for people and tasks, they may fall into one of 5 categories: Impoverished Management, Produce or Perish Management, Middle of the Road Management, Country Club Management, and Team Management"}
            </blockquote>
          <br />
          <h6 className="text-xl font-bold mb-4">Impoverished Management - Low Results/ Low People </h6>
          <div
            className={markdownStyles["markdown"]}> 
            <p><strong>Description:</strong> Lowest care for people and results. This type of management is not effective and causes dissatisfaction, low morale, and poor results. Also not interested in creating an environment that is conducive to better results.</p>
          </div>
          <br/>

          <h6 className="text-xl font-bold mb-4">Produce or Perish Management - High Results/Low People </h6>
          <div className={markdownStyles["markdown"]}>
          
            <p><strong>Description:</strong> Similar to authoritarian leadership, which is a rigid one-person deciding and guiding management style, results are of utmost importance in this management while the morale, motivation, and needs of the people are not. This type of management tend to apply strict rules, rewarding overperformance and punishing poor performance</p>
            <p><strong>Nuance:</strong> 
              <ul>
                <li>Produce or Perish Management might be effective with inexperience and junior employees who need more guidance and structure to perform well</li>
                <li>Does not work well with experienced employees who are more self-sufficient and do not need as much guidance</li>
              </ul>
            </p>
            <p><strong>Drawbacks:</strong> 
              <ul>
                <li>This type of management can lead to high turnover</li>
              </ul>
            </p>
          
          </div>
          <br/>

          <h6 className="text-xl font-bold mb-4">Middle of the Road Management - Medium Results/Medium People </h6>
          <div className={markdownStyles["markdown"]}>

            <p><strong>Description:</strong> This type of management is a balance between the two axes, but not in a good way. It is a compromise between the two axes, but does not fully satisfy either axis making it ineffective. 
            </p>
          
            <p><strong>Drawbacks:</strong> 
              <ul>
                <li>This type of management can lead to low morale <strong>AND</strong> poor results</li>
              </ul>
            </p>
          
          </div>
          <br/>

          <h6 className="text-xl font-bold mb-4">Country Club Management - Low Results/High People</h6>
          <div className={markdownStyles["markdown"]}>
          
            <p><strong>Description:</strong> Focuses on team morale, motivation, and happiness more than results due to the idea that if people are motivated, then they will produce better results. Similar to Laissez-Faire leadership where leadership is hands-off and gives team freedom to perform on its own, only providing help if the team needs it</p>
            <p><strong>Nuance:</strong> 
              <ul>
                <li>This type of management can be effective in a team that is already motivated and experienced</li>
                <li>Does not work well with inexperienced employees who need more guidance and structure to perform well</li>
              </ul>
            </p>
            <p><strong>Drawbacks:</strong> 
              <ul>
                <li>This type of management can create a relaxed work environment and cause poor productivity because of lack of direction</li>
              </ul>
            </p>
          
          </div>

          <br/>

          <h6 className="text-xl font-bold mb-4"> Team Management - High Results/High People</h6>
          <div className={markdownStyles["markdown"]}>
          
            <p><strong>Description:</strong> This type of management is the most effective and ideal and best model in the grid. Management focuses on results as well as motivation of the team. They focus on the mission and vision of the company, motivate their followers, and are commited to doing the best for their folllowers to produce great results. It satisfies both axes and creates an environment that is conducive to high morale, motivation, and productivity by applying participative leadership skills, where group members are involved in part of the decision-making process. This way, people are committed to the organization's success and their needs and proudction needs coincide</p>
            
          
          </div>

          <br/>

          <h6 className="text-xl font-bold mb-4">Nuances of the Blake Mouton Grid</h6>
          <div className={markdownStyles["markdown"]}>
          
            <p> Adaptive leadership skills may be required to apply these leadership styles seen in the model, in which one uses a set of strategieis and practice to overcome obstacles, achieve meaningful change, and adapt to challenging environments</p>
            <p>
            There are also two other models created later, Paternalistic Management, between Country Club and Produce or Perish and Opportunisitc Mangement which has no definitive place in the grid. Paternalistic Mangement sees supportive and authoritative leadership to support and encourage team members to produce but does not give them much freedom, as to not compromise their own authority. Opportunistic Management is a manipulative style that uses whatever style is most effective to achieve their own goals, regardless of the needs of the team or organization
            </p>
          
          </div>

          
          <h6 className="text-xl font-bold mb-4">Where I've demonstrated a style from the grid...          </h6>
          <div
            className={markdownStyles["markdown"]}
          > 
          
            <p>In my role as a leader in BMI, I have exhibited the Country Club Management style. I tend to focus on the morale and comfort of my team, spending most of the meetings bantering and catching up. I liked to use the time to destress and relax and get to know my team better. I would give tasks and not follow up on them incrementally. I would also leave my team to take the initiative to come up with events and lead them from creation to finish. This did not work for the newer members of the team who were not as experienced with creating a program. I did this because my last supervisor worked this way and although I was slow to pick up, it worked for me.</p>
            <blockquote className="border-l-4 border-black pl-6 py-2 my-8 font-serif text-2xl md:text-3xl ">
              {"I also had a lot of trust in my team's ability to perform well and I wanted them to feel comfortable and motivated to do so."}
            </blockquote>
            <p>At times however, we got into issues because we were not as productive as we needed to be and we put on events that could have been better if I had given more guidance, followed up on tasks that I assigned, and provided more structure overall. </p>
          </div>
          <h4 className="text-2xl font-bold mb-4">Reflections on Personality Assessments
          </h4>
          <Separator className="my-4" />
          <h6 className="text-xl font-bold mb-4">Myers-Briggs Type Indicator 
          </h6>
          <div
            className={markdownStyles["markdown"]}
           
          > 
            <p>My results were a ENFP-A, the Campaigner personality type: As an Assertive Campaigner, I am a force of creativity and idealism. I have charisma and a geniune interest in people. I am driven by my values and quest for authenticity!</p>
            <p><strong>Extraverted (E)</strong> - 60% </p>
            <p><strong>Intuitive (N)</strong> - 60% </p>
            <p><strong>Feeling (F)</strong> - 69% </p>
            <p><strong>Prospecting (P)</strong> - 63% </p>
            <p><strong>Assertive (A)</strong> - 67% </p>
            <Image
            src={"/assets/blog/reflection/stats.png"}
            alt={`ENFP-A results`}
            width={400}
            height={400}
          
          />
          </div>
          <br />
          <h6 className="text-xl font-bold mb-4">Where have I seen this?</h6>
          <div className={markdownStyles["markdown"]}>
          
            <p> My personality has come into play in my leadership experience as a leader in BMI. I am very creative and idealistic, and I like to think of new ways to improve the program and make it more engaging for the scholars. I also have a lot of charisma and I am very genuine in my interest in people. This has helped me build strong relationships with my team and the scholars, which has been essential for the success of the program.
            </p>
            <p>As I tend to idealize, creating new programs, I sometimes leave the implementation to my team members often not following up which can be detrimental. My strong sense of values and ideals spur me on to be dedicated to the program and to work with the scholars and mentors for as long as I have.
            Share and reflect on all results from conflict assessment.</p>
          
          </div>
          <br />
          <h6 className="text-xl font-bold mb-4">Conflict Assessment          </h6>
          <Separator className="my-4" />
          <div
            className={markdownStyles["markdown"]}
          > 
          
          <p>My results were Compromising, Competing, Collaborating, Accommodating</p>
            <p><strong>Competing </strong> - 9 </p>
            <p><strong>Collaborating</strong> - 9 </p>
            <p><strong>Compromising</strong> - 9 </p>
            <p><strong>Avoiding</strong> - 4 </p>
            <p><strong>Accommodating</strong> - 9</p>
            <Image
            src={"/assets/blog/reflection/Conflict_Management_Styles_Assessment+28229.jpeg"}
            alt={`ENFP-A results`}
            width={400}
            height={400}
            />
            <Button variant="link" asChild>
              <Link href="https://drive.google.com/file/d/1MUXv3cO0kIkCwYnX2RpLJCRlNdZzJt0R/view?usp=sharing ">
              View Results <Share className="ml-2 h-4 w-4"/> 
              </Link>
            </Button>
          <p>
          I am a collaborative person and I tend to accommodate others and people please but I am not afraid of conflict at all. I sometimes invite conflict because it is inevitable and I feel like navigating conflict successfully can strengthen a team or bond between people and make their relationship more efficient in accomplishing goals and/or navigating challenges.

          </p>
          </div>
          <br />
          <h6 className="text-xl font-bold mb-4">Conflict Resolution with My Conflict Styles       </h6>
          <div
            className={markdownStyles["markdown"]}
          > 
          
            <p> Last year in one of my teams, there was a Grad Assistant that I worked under. We had some disagreements about how to organize our team and run the program. At first, as the incidents and issues piled up, I tried to accommodate, like the Teddy Bear, and avoid the conflict because I did not want to disrupt my relationship with this person because I considered us to be friends. However as time went on and issues kept arising, we had to have a conversation about it where we could express our differences and come to a foxy compromise.</p>
            <blockquote className="border-l-4 border-black pl-6 py-2 my-8 font-serif text-2xl md:text-3xl ">
              {"Unfortunately, the other person felt that because of their position, that they were right and I was flat out wrong and there was no need for a compromise. They were more like a Shark."}
            </blockquote>
            <p>I pushed for a compromise here more by appealing to the fact that I had been more experienced. I also appealed to the fact that forcing their solution on the team would affect their relationship with me and everyone on the team which would make it difficult to work. Eventually we reached the compromise and the team was able to work more efficiently and effectively.</p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <Link href="/growth" >
            Next Page <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>  
        </div>
      </article>
    </Container>
  </main>
  );
}