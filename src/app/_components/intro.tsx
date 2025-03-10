import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Link href="/">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        My Best Self Portfolio
      </h1>
      </Link>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <nav className="flex justify-center md:justify-start space-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/interviews"}>Interviews</Link>
          <Link href={"/reflection"}>Reflection</Link>
          <Link href={"/growth"}>Growth</Link>
        </nav>
        
      </h4>

    </section>
  );
}
