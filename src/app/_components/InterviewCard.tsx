"use client"
import Image from "next/image"
import Link from "next/link"
import { Quote } from "lucide-react"

interface InterviewCardProps {
  name: string
  role: string
  quote: string
  synopsis: string
  imageUrl: string
  slug: string

}

export function InterviewCard({ name, role, quote, synopsis, imageUrl, slug }: InterviewCardProps) {

    const styles = {
    card: "group overflow-hidden rounded-lg border border-primary/10 bg-background shadow-sm transition-all hover:shadow-md hover:border-primary/30 flex flex-col h-full",
    imageContainer: "relative overflow-hidden",
    imageWrapper: "aspect-square w-full overflow-hidden bg-muted",
    image: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
    overlay: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end",
    personInfo: "p-4 sm:p-6",
    name: "text-xl font-bold text-white",
    role: "text-sm text-white/80",
    content: "p-4 sm:p-6 flex-grow flex flex-col",
    quoteContainer: "mb-4 relative",
    quoteIcon: "absolute -top-2 -left-2 h-6 w-6 text-primary/20",
    quoteText: "italic text-base pl-4 border-l-2 border-primary/30",
    synopsis: "text-sm text-muted-foreground mb-4 flex-grow",
    button:
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow transition-all mt-auto",
  }


  return (
    <div className={styles.card}>
      <style jsx>{`
        .interview-button {
          background: linear-gradient(to right, hsl(330, 80%, 50%, 0.9), hsl(260, 70%, 50%, 0.9));
          transition: all 0.2s ease;
        }
        
        .interview-button:hover {
          background: linear-gradient(to right, hsl(330, 80%, 50%), hsl(260, 70%, 50%));
          transform: translateY(-2px);
        }
        
        .quote-icon {
          color: hsl(330, 80%, 50%, 0.2);
        }
        
        .quote-border {
          border-left: 2px solid hsl(330, 80%, 50%, 0.3);
          padding-left: 1rem;
          font-style: italic;
        }
      `}</style>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`Portrait of ${name}`}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.personInfo}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.quoteContainer}>
          <Quote className="quote-icon absolute -top-2 -left-2 h-6 w-6" />
          <p className="quote-border">"{quote}"</p>
        </div>

        <p className={styles.synopsis}>{synopsis}</p>

        <Link href={`/interviews/${slug}`}
            className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow mt-auto bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 interview-button`}>
          Read Full Interview
        </Link>
      </div>
    </div>
  )
}

