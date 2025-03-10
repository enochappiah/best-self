import Container from "@/app/_components/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 transition-colors duration-200 dark:bg-slate-800 dark:border-slate-700">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-center gap-4 px-5">
          <SocialIcon
            url="https://www.linkedin.com/in/enoch-appiah-282361219"
            className="transition-opacity hover:opacity-80"
            bgColor="#0077B5"
            fgColor="#ffffff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="mailto:eappiah4@jhu.edu"
            className="transition-opacity hover:opacity-80"
            bgColor="#EA4335"
            fgColor="#ffffff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://github.com/enochappiah"
            className="transition-opacity hover:opacity-80"
            bgColor="#333333"
            fgColor="#ffffff"
            style={{ height: 40, width: 40 }}
          />
          <Button size="sm" asChild>
                <Link href="/sources">
                Sources
                </Link>
              </Button>
        </div>
        
      </Container>
    </footer>
  )
}

export default Footer

