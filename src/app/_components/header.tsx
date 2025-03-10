import Link from "next/link";

const Header = () => {
  return (
    <>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
    </>
  );
};

export default Header;


{/* <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <nav className="flex justify-center md:justify-start space-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/posts/dynamic-routing"}>Interviews</Link>
          <Link href={"/"}>Reflection</Link>
          <Link href={"/growth"}>Growth</Link>
        </nav>
        
      </h4>

    </section> */}
