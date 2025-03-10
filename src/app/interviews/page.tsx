"use client"
import { Intro } from "../_components/intro"
import { InterviewCard } from "../_components/InterviewCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";


export default function InterviewsPage() {
  const styles = {
    container: "min-h-screen ",
    main: "",
    sectionHeader: "flex flex-col items-start gap-4 mb-8",
    sectionTitle:
      "text-3xl font-bold tracking-tight bg-clip-text",
    sectionDescription: "text-muted-foreground",
    featuredSection: "mb-12 rounded-xl p-6 md:p-8",
    featuredGrid: "grid gap-8 md:grid-cols-2",
  }

  return (
    <div className={styles.container}>
      <Intro />

      {/* Hero Section */}
      

      <main className={styles.main}>
        {/* Featured Interviews Section */}
        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Interviews</h2>
            <p className={styles.sectionDescription}>
            Can you tell me one time when I was at my best self and be as descriptive, honest and share as much detail as possible?
            </p>
          </div>

          <div className={styles.featuredGrid}>
            <InterviewCard
              name="Jade Boateng-Moore"
              role="Senior at Johns Hopkins University"
              quote="You were calm in a time of stress and were able to show your preparation and competitive spirit"
              synopsis="Jade, my best friend and girlfriend, shares her anecdotes from the 4 years we have know each other of times I was my best self."
              imageUrl="/assets/blog/interviews/FullSizeRender.jpg"
              slug="interview-jade"
            />

            <InterviewCard
              name="Akyaa Duku"
              role="My Mother "
              quote="One time you were at your best was when you were competitive with your older brother."
              synopsis="My mother shares an anecdote of my early childhood when my brother and I compete in studies and excellence and how it brought out the best in me."
              imageUrl="/assets/blog/interviews/akyaa.jpg"
              slug="interview-akyaa"
            />
            
          </div>
          <div className="flex justify-center mt-16">
              <Button variant="outline" size="lg" asChild>
                <Link href="/reflection" >
                Next Page <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </section>
      </main>
    </div>
  )
}

