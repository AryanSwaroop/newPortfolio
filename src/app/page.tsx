import Link from "next/link";
import Email from "@/components/email";

const items = {
  "/blog": {
    title: "Experiences",
    description: "My Skills and Experiences in the field of Engineering.",
  },
  "/projects": {
    title: "Projects",
    description: "Things I have made trying to put a dent in the universe.",
  },
  "/bookshelf": {
    title: "Bookshelf",
    description: "A complete catalog of the books I own.",
  },
  "/photos": {
    title: "Photos",
    description: "A collection of moments captured in time.",
  },
};

export const metadata = {
  title: "Aryan Swaroop",
  description: "Welcome to my own little corner of the web.",
};

export default function HomePage() {
  return (
    <section className="antialiased md:w-full max-w-xl mt-4 mx-4 md:mx-auto">

      <p className="mb-4">
        I am a software engineer interested in building software and
        crafting delightful interfaces from Delhi Technological University(formely DCE).
      </p>

      <p className="mb-4">
        Welcome to my place at web , where I share my experiences and
        blogs on topics that interest me.
      </p>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {Object.entries(items).map(([path, { title, description }]) => {
          return (
            <Link key={`link=${path}`} href={path}>
              <div className="flex flex-col relative max-h-96 w-full overflow-hidden rounded-xl p-6 border border-white/[0.2] hover:border-white/[0.3] transition-all">
                <p className="text-neutral-100 tracking-tight">{title}</p>
                <p className="text-neutral-400">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="mb-4">
        Reach me by email: <Email />.
      </p>
    </section>
  );
}
