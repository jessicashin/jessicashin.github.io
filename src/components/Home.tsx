import clsx from "clsx";
import { Link } from "react-router-dom";
import { Hyperlink } from "./IconButton";

export default function Home() {
  const LinkSection = ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={clsx("grid gap-2", className)} {...props}>
      <li>
        <Hyperlink href="https://github.com/jessicashin/jessicashin.github.io">
          GitHub
        </Hyperlink>
      </li>
      <li>
        <Hyperlink href="https://www.linkedin.com/in/jessica-shin/">
          LinkedIn
        </Hyperlink>
      </li>
      <li>
        <Hyperlink href="mailto:jessicasyshin@gmail.com">
          jessicasyshin@gmail.com
        </Hyperlink>
      </li>
    </ul>
  );

  return (
    <div className="grid gap-x-20 gap-y-10 lg:grid-cols-[1fr_minmax(460px,_1fr)]">
      <div className="grid gap-y-8">
        <p className="max-w-lg">
          Hi, I'm Jess. I'm a developer and sometimes a designer. Starting with
          a Neopets fan site that I built in 2006, to the first enterprise
          application I developed in 2016, to now with 5+ years of experience in
          the industry, I've always been obsessed with the process of creating
          an engaging and satisfying digital experience.
        </p>
        <div>
          I've most recently been working with:
          <ul className="mt-2 grid auto-cols-min grid-flow-col grid-rows-3 gap-x-8 lg:grid-flow-row">
            {[
              "TypeScript",
              "React",
              "Angular",
              "Tailwind",
              "GraphQL",
              "Node.js",
            ].map((name, index) => (
              <li className="before:mr-2 before:content-['▪']" key={index}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <LinkSection className="hidden lg:block" />
      </div>

      <div
        className={clsx(
          "flex min-h-[16rem] items-end justify-end bg-gradient-to-b from-stone-300 to-orange-100 p-6 dark:from-cyan-900/50 dark:to-yellow-900/75 lg:-mt-16"
        )}
      >
        <Link
          to="/work"
          role="button"
          className="group relative flex flex-col items-end text-4xl font-extralight uppercase before:absolute before:top-1 before:left-5 before:text-3xl before:content-['→'] md:text-6xl md:font-thin md:before:top-2 md:before:left-8 md:before:text-5xl"
        >
          {["My Work", "Experience"].map((text, index) => (
            <div
              className="relative -mb-1 after:absolute after:top-0 after:left-0 after:bottom-0 after:block after:w-0 after:bg-stone-800 after:transition-all after:duration-75 last:mb-0 group-hover:text-stone-300 group-hover:after:w-full dark:after:bg-stone-300 dark:group-hover:text-stone-800"
              key={index}
            >
              <div className="relative z-10 pt-1 pr-3 pl-2">{text}</div>
            </div>
          ))}
        </Link>
      </div>
      <LinkSection className="lg:hidden" />
    </div>
  );
}
