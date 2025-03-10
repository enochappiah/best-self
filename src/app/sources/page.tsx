import markdownToHtml from "@/lib/markdownToHtml";
import Header from "../_components/header";
import { PostBody } from "../_components/post-body";
import Container from "../_components/container";
import { Intro } from "../_components/intro";
import markdownStyles from "../_components/markdown-styles.module.css";

export default async function Sources() {  

    return (
      <main>
        <Container>
          <Intro  />
          <article className="mb-32"> 
            <div className="max-w-2xl mx-auto">
                <div
                    className={markdownStyles["markdown"]}
                    
                > 
                <ul>
                    <li>Admin. “2025 Adaptive Leadership: 5 Principles to Be an Adaptive Leader.” San Francisco Business School, 19 Dec. 2024, blog.sanfranciscobs.com/adaptive-leadership/. </li>
                    <li>Admin. “2025 Authoritarian Leadership - 7 Traits of Authoritative Leadership.” San Francisco Business School, 19 Dec. 2024, blog.sanfranciscobs.com/authoritarian-leadership-authoritative-leadership/.</li>
                    <li>Admin. “2025 Participative Leadership: 7 Traits, Pros, Cons & When to Use.” San Francisco Business School, 19 Dec. 2024, blog.sanfranciscobs.com/participative-leadership-style/.</li>
                    <li>Admin. “Blake Mouton Grid: 5 Leadership Types for People and Production.” San Francisco Business School, 9 Dec. 2023, blog.sanfranciscobs.com/blake-mouton-leadership-grid/. </li>
                    <li>Admin. “Laissez-Faire Leadership - 5 Cases You Can Apply - 2025 Guide.” San Francisco Business School, 19 Dec. 2024, blog.sanfranciscobs.com/laissez-faire-leadership/.</li>

                </ul>
                </div>
            </div>
          </article>
        </Container>
      </main>
    );
  }